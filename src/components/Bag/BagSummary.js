import React from 'react'
import Button from '../../UI/Button/Button'
import PayPallButton from '../../components/Paypal'

const BagSummary = (props) => {
    let {bagSubTotal, bagTax, bagTotals} = props.value
    let {clearBag} = props.value

    return (
        <div className="bag__payment">
            {/* <h1 className="bag__item-subtotal">: 17$</h1> */}
            <h1 className="bag__item-tax">pdv: 4$</h1>
            <h1 className="bag__item-total">ukupno: 21$</h1>
            <Button name="bag__item-clear" btnType="alt" 
            clicked={() => clearBag()}>Očisti korpu<i className="fas fa-exclamation-triangle"></i></Button>
            <PayPallButton total={bagTotals} clearBag={clearBag} history={props.history}/>
        </div> 
    )
}

export default BagSummary

