import React, { Component as Cp } from "react";
import mainStyles from "../../css/main.module.css";
import styles from "./NavBar.module.css";
import { Immutable } from "immer";

type Props = Immutable<{
    incrementWeek :()=>void;
    decrementWeek :()=>void;
    /**在 `NavBar` 处进行范围检查。*/
    setWeek :(week :number)=>void;
    currentWeek :number;
    maxWeek :number;
}>;
type State = Immutable<{
    editing :boolean;
    /**这个必须留，因为修改了state React才会更新视图，修改props会出现各种奇怪的问题
     * 
     * 但是我们一般不会用这个作为来源，仅用于绑定DOM和数据更新，**请使用props获取真正的、准确的数据***/
    currentWeek :number;
}>;

/**@once*/
export default class NavBar extends Cp<Props, State>{

    constructor(props :Props){
        super(props);
        this.state = {
            editing: false,
            currentWeek: props.currentWeek
        };
    }

    //#region 编辑跳转周数
        private ref = React.createRef<HTMLSpanElement>();
        private clickCB = ()=>{
            if(!this.state.editing) this.setState({editing: true}, ()=>{
                this.ref.current!.focus();
                getSelection()!.selectAllChildren(this.ref.current!);
                document.addEventListener("keypress", this.keyDoneCB);
            });
        }
        private keyDoneCB = (e :KeyboardEvent)=>{
            if(e.key === "Enter" && this.state.editing){
                e.preventDefault();
                this.reset();
            }
        }
        private blurCB = ()=>{
            if(this.state.editing) this.reset();
        }
        private reset(){
            const setState_Report = (week :number)=>{
                //这个仅用于触发React的视图更新，使得下一次props传入之前视图不会跳变
                this.setState({currentWeek: week});
                //好像必须我们自己干这活，React时不时会不干了
                this.ref.current!.innerText = week + "";
                this.props.setWeek(week);
            };
            this.setState({editing: false}, ()=>{
                document.removeEventListener("keypress", this.keyDoneCB);
                getSelection()!.empty();
                const newWeek = parseInt(this.ref.current!.innerText);
                //还原，这里React帮不了我们，我们自己干
                if(isNaN(newWeek)) this.ref.current!.innerText = this.state.currentWeek + "";
                else{
                    if(newWeek > this.props.maxWeek){
                        setState_Report(this.props.maxWeek);
                    }
                    else if(newWeek < 1) setState_Report(1);
                    else setState_Report(newWeek);
                }
            });
        }
    //#endregion
    
    //不能在这里做任何updateData的事情，因为data对象不在这里，只有根组件有访问完整data的权限，所以只能由根组件更新

    render() :React.ReactNode{
        return(<div className={`${mainStyles.noselect} ${styles.container}`}>
            <div tabIndex={1} className={`${styles.button}${this.props.currentWeek === 1 ? ` ${styles.disabled}` : ""}`} title="后退一周" onClick={this.props.decrementWeek}>←</div>
            <div
                tabIndex={2}
                className={styles.weekNav}
                title="输入周数"
                onClick={this.clickCB}
                onBlur={this.blurCB}
                style={{
                    cursor: this.state.editing ? "text" : "pointer"
                }}
            >第
                <span
                    className={mainStyles.reselect}
                    ref={this.ref}
                    contentEditable={this.state.editing}
                    style={{
                        whiteSpace: "pre",
                        display: "inline-block",
                        textAlign: "center",
                        minWidth: "4rem"
                    }}
                >{this.state.currentWeek}</span>
            周</div>
            <div tabIndex={3} className={`${styles.button}${this.props.currentWeek === this.props.maxWeek ? ` ${styles.disabled}` : ""}`} title="前进一周" onClick={this.props.incrementWeek}>→</div>
        </div>);
    }

}