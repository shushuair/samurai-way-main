import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message"
import state, {DialogsType, MessageType, StateType} from "../../redux/state";

export type DialogsPropsType = {
    state: StateType
    addMessage: () => void
    addMessageValue: (value: string) => void
}


export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.state.dialogsPage.dialogs.map((el: DialogsType) => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = props.state.dialogsPage.messages.map((el: MessageType) => <Message message={el.message}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.addMessageValue(e.currentTarget.value)
    }
    const addMessageButton = () => {
        props.addMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div>
                <div className="s.messages">
                    {messagesElements}
                </div>
                <div>
                    <input value={state.dialogsPage.newMessageText} onChange={onChangeHandler}/>
                    <button onClick={addMessageButton}>Add message</button>
                </div>
            </div>


        </div>
    );
};


// let dialogs = [
//     {id: 1, name: "Ilya"},
//     {id: 2, name: "Aleks"},
//     {id: 3, name: "Den"},
//     {id: 4, name: "Jack"},
//     {id: 5, name: "Mike"},
//     {id: 6, name: "Liam"},
// ]
//
//     let messages = [
//     {id: 1, message: "Hi there"},
//     {id: 2, message: "Where are you?"},
//     {id: 3, message: "I am so far"},
//     {id: 4, message: "Yo"},
//     {id: 5, message: "No way"},
// ]