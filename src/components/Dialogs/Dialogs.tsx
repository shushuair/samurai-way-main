import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message"



export const Dialogs = (props: any) => {
    let dialogsElements = props.state.dialogs.map((el:any) => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = props.state.messages.map((el:any) => <Message message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className="s.messages">
                {messagesElements}
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