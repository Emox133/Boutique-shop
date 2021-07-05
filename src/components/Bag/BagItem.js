import React from 'react'
import BlackShirt from './../../images/black-t-shirt.jpg'

const BagItem = (props) => {
    let items = props.items 
    let {removeFromBag,increase, decrease} = props.value

    return (
            <div className="bag__item" id={items.id}>
                <img src={BlackShirt} alt="clothes" className="bag__item-image"/>
                    <h1 className="bag__item-title">{items.title}</h1>
                    <h1 className="bag__item-material">material: Pamuk</h1>
                    <h1 className="bag__item-count">count: 
                        <i className="fas fa-chevron-circle-left" onClick={() => decrease(items.id)}></i>
                            {items.count}
                        <i className="fas fa-chevron-circle-right" onClick={() => increase(items.id)}></i></h1>
                <button className="alt u-capitalize-text" onClick={() => removeFromBag(items.id)}>Obriši</button>
            </div>
    )
}

export default BagItem
