import React from 'react'
import Title from '../../UI/Title'

const BagEmpty = () => {
    return (
        <div className="bag__empty">
            <Title modify="u-capitalize-text u-center-text" name="your bag is currently" title="empty" after={<i className="fas fa-frown"></i>}/>
        </div>
    )
}

export default BagEmpty
