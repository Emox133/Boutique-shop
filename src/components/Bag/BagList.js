import React from 'react'

import Title from '../../UI/Title'
import BagItem from './BagItem'
import BagSummary from './BagSummary'

const BagList = (props) => {
    let {bag} = props.data

    return (
        <div className="bag__container u-capitalize-text">
            <Title modify={'u-capitalize-text u-center-text'} name="your" title="bag" after={<i class="fas fa-smile-beam smile"></i>}/>
            {bag.map(items => {
                return <BagItem key={items.id} items={items} value={props.data}/>
            })}
            <BagSummary value={props.data}/>
        </div>
    )
}

export default BagList
