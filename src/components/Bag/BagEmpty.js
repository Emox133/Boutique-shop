import React from 'react'
import Title from '../../UI/Title'

const BagEmpty = () => {
    return (
        <div className="bag__empty">
            <Title modify="u-capitalize-text u-center-text" name="vaša korpa je trenutno" title="prazna" after={<i className="fas fa-frown"></i>}/>
        </div>
    )
}

export default BagEmpty
