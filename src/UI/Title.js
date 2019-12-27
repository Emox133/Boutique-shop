import React from 'react'

let Title = (props) => (
    <div className={'u-center-text u-capitalize-text title'}>
        <h1>{props.name} <strong className={'text-main'}>{props.title}</strong></h1>
    </div>
);

export default Title