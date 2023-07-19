import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addMessageValue, addPost, addPostValueTextarea, StateType} from "./redux/state"
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                addPostValueTextarea={addPostValueTextarea}
                addMessage={addMessage}
                addMessageValue={addMessageValue}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

