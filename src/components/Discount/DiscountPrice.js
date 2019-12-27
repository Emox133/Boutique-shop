import React from 'react'

const DiscountPrice = (props) => {
    return ( 
        <div className="discount__box">
            <div className="discount__center d-flex">
                <span className="discount__count">{props.count}</span>
                <span className="discount__sign">{props.sign}</span>
            </div>
            <h1 className="discount__title">{props.title}</h1>
        </div> 
    )
}

export default DiscountPrice
