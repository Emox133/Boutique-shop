import React from 'react'
import {ClothesConsumer} from '../../context'

const ClothesList = () => {
    return (
        <div>
            <ClothesConsumer>
                {(value) => {
                   return value.products.map(product => {
                    //    return console.log(product)
                   })
                }}
            </ClothesConsumer>
        </div>
    )
}

export default ClothesList