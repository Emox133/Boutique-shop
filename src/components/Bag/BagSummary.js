import React from 'react'
import Button from '../../UI/Button/Button'

const BagSummary = (props) => {
    let {bagSubTotal, bagTax, bagTotals} = props.value
    let {clearBag} = props.value

    return (
        <div className="bag__payment">
            <h1 className="bag__item-subtotal">subtotal: {bagSubTotal}$</h1>
            <h1 className="bag__item-tax">price: {bagTax}$</h1>
            <h1 className="bag__item-total">total: {bagTotals}$</h1>
            <Button name="bag__item-clear" btnType="alt" clicked={() => clearBag()}>clear cart<i className="fas fa-exclamation-triangle"></i></Button>
        </div> 
    )
}

export default BagSummary

