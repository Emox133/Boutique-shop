import React from 'react'
import Button from '../../UI/Button/Button'

const BagSummary = (props) => {
    console.log(props.value)
    return (
        <div className="bag__payment d-flex">
            <h1 className="bag__item-price">price:</h1>
            <h1 className="bag__item-subtotal">subtotal: </h1>
            <h1 className="bag__item-total">total:</h1>
            <Button name="bag__item-clear" btnType="alt">clear cart<i className="fas fa-exclamation-triangle"></i></Button>
        </div> 
    )
}

export default BagSummary

