import React from 'react'
import Button from '../../UI/Button/Button'
import PayPallButton from '../../components/Paypal'

const BagSummary = (props) => {
    let {bagSubTotal, bagTax, bagTotals} = props.value
    let {clearBag} = props.value

    return (
        <div className="bag__payment">
            <h1 className="bag__item-subtotal">subtotal: {bagSubTotal}$</h1>
            <h1 className="bag__item-tax">tax: {bagTax}$</h1>
            <h1 className="bag__item-total">total: {bagTotals}$</h1>
            <Button name="bag__item-clear" btnType="alt" 
            clicked={() => clearBag()}>clear cart<i className="fas fa-exclamation-triangle"></i></Button>
            <PayPallButton total={bagTotals} clearBag={clearBag} history={props.history}/>
        </div> 
    )
}

export default BagSummary

