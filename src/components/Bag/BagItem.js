import React from 'react'

const BagItem = (props) => {
    let items = props.items 
    let {removeFromBag,increase, decrease} = props.value

    return (
            <div className="bag__item" id={items.id}>
                <img src={items.image} className="bag__item-image"/>
                    <h1 className="bag__item-title">{items.title}</h1>
                    <h1 className="bag__item-material">material: {items.material}</h1>
                    <h1 className="bag__item-count">count: 
                        <i className="fas fa-chevron-circle-left" onClick={() => decrease(items.id)}></i>
                            {items.count}
                        <i className="fas fa-chevron-circle-right" onClick={() => increase(items.id)}></i></h1>
                <button onClick={() => removeFromBag(items.id)}>remove item</button>
            </div>
    )
}

export default BagItem
