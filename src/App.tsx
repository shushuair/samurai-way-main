import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {MyPosts} from "./components/Profile/MyPosts/MyPosts";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";


const App = (props: any) => {
    // let posts = [
    //     {id: 1, message: "Hi, how are you? ", likesCount: 10 },
    //     {id: 2, message: "I'm fine ", likesCount: 3 },
    //     {id: 2, message: "Ohoho ", likesCount: 12 },
    //     {id: 2, message: "wow ", likesCount: 5 },
    // ]

    // let dialogs = [
    //     {id: 1, name: "Ilya"},
    //     {id: 2, name: "Aleks"},
    //     {id: 3, name: "Den"},
    //     {id: 4, name: "Jack"},
    //     {id: 5, name: "Mike"},
    //     {id: 6, name: "Liam"},
    // ]
    //
    // let messages = [
    //     {id: 1, message: "Hi there"},
    //     {id: 2, message: "Where are you?"},
    //     {id: 3, message: "I am so far"},
    //     {id: 4, message: "Yo"},
    //     {id: 5, message: "No way"},
    // ]
    return (


        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/*' element={<Profile state={props.state.profilePage} addPost={props.addPost} />}/>
                    <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>

            </div>
        </div>

    )
};


export default App;
