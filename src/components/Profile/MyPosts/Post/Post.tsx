import React from 'react';
import s from './Post.module.css'

export const Post = (props:any) => {
    return (
        <div className={s.item}>
            <img
                src="https://d.newsweek.com/en/full/2027477/avatar-2-movie.jpg?w=1600&h=1600&q=88&f=a9c76735de5944303f821b996fd8a21c"
                alt="img"/>
            {props.message}
            <div>
                <span>Count: {props.count}</span>
            </div>
        </div>
    )
}

