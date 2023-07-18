import React from 'react';
import s from "./../Dialogs.module.css"

export const Message = (props: any) => {
    return <div className={s.dialog}>{props.message}</div>
}



// import React from 'react';
// import s from "./Dialogs.module.css"
// import {NavLink} from "react-router-dom";
//
// export const Message = (props: any) => {
//     return <div className={s.dialog}>{props.message}</div>
// }
//
// export const Message = (props: any) => {
//     let dialogs = [
//         {id: 1, name: "Ilya"},
//         {id: 2, name: "Aleks"},
//         {id: 3, name: "Den"},
//         {id: 4, name: "Jack"},
//         {id: 5, name: "Mike"},
//         {id: 6, name: "Liam"},
//     ]
//
//     let dialogsElements = dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);
//
//     let messages = [
//         {id: 1, message: "Hi there"},
//         {id: 2, message: "Where are you?"},
//         {id: 3, message: "I am so far"},
//         {id: 4, message: "Yo"},
//         {id: 5, message: "No way"},
//     ]
//
//     let messagesElements = messages.map(el => <Message message={el.message}/>)
//
//     return (
//         <div className={s.dialogs}>
//             <div className={s.dialogsItems}>
//                 {dialogsElements}
//
//             </div>
//             <div className="s.messages">
//                 {messagesElements}
//             </div>
//         </div>
//     );
// };


