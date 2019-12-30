import React from 'react'
import {ClothesConsumer} from '../../context'
import BagList from './BagList'
import BagEmpty from './BagEmpty'
import Title from '../../UI/Title'

// ALT WAY OF GETTING BAG ITEMS
// let bagItems;
// {value.bag ? bagItems = value.bag : bagItems = []}
// console.log(bagItems)

const Bag = () => {
    return (
    <ClothesConsumer>
        {value => {
            let {bag} = value
            let bagContent 

            {bag.length > 0 ? bagContent = (
                <React.Fragment>
                    <BagList data={value}/>
                </React.Fragment>) : bagContent = <BagEmpty />}
                   
            return bagContent
        }}
    </ClothesConsumer>
    )
}

export default Bag
