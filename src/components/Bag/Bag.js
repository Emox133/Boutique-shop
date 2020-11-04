import React from 'react'
import {ClothesConsumer} from '../../context'
import BagList from './BagList'
import BagEmpty from './BagEmpty'

// ALT WAY OF GETTING BAG ITEMS
// let bagItems;
// {value.bag ? bagItems = value.bag : bagItems = []}
// console.log(bagItems)

const Bag = (props) => {
    return (
    <ClothesConsumer>
        {value => {
            let {bag} = value
            let bagContent 
            bag.length > 0 ? bagContent = (
                <React.Fragment>
                    <BagList data={value} history={props.history}/>
                </React.Fragment>) : bagContent = <BagEmpty />
                   
            return bagContent
        }}
    </ClothesConsumer>
    )
}

export default Bag
