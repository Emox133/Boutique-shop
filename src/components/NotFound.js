import React from 'react'
import Title from '../UI/Title'

const NotFound = (props) => {
    return (
        <div>
            <Title modify={'u-capitalize-text u-center-text'} name={'the requested page'} title={props.location.pathname} 
            after={'was not found (404)'} />
        </div>
    )
}

export default NotFound
