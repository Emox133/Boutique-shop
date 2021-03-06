import React from 'react'

const Button = (props) => {
    // let classList = [];
    // {props.type == 'danger' ? classList.push('danger') : props.type == 'success' ? classList.push('success') : null}

    return (
            <button className={[props.name, props.btnType].join(' ')} disabled={props.disabled} onClick={props.clicked}>
                {props.children}
            </button>
    )
}

export default Button
