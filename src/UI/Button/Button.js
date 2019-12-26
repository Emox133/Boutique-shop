import React from 'react'

const Button = (props) => {
    // let classList = [];
    // {props.type == 'danger' ? classList.push('danger') : props.type == 'success' ? classList.push('success') : null}

    return (
        <div>
            <button className={['btn__bag', props.btnType].join(' ')}>
                {props.children}
            </button>
        </div>
    )
}

export default Button
