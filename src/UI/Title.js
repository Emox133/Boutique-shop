import React from 'react'

let Title = (props) => (
    <div className='title'>
        <h1 className={props.modify}>{props.name} <strong className={'text-main'}>{props.title}</strong> {props.after}</h1>
    </div>
);

export default Title