import React from 'react'
import BagItem from './BagItem'
import BagSummary from './BagSummary'

const BagList = (props) => {
    let {bag} = props.data

    return (
        <div className="bag__container u-capitalize-text">
            {bag.map(items => {
                return <BagItem key={items.id} items={items} value={props.data}/>
            })}
            <BagSummary value={props.data}/>
        </div>
    )
}

export default BagList
