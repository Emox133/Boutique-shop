import React from 'react'
import {ClothesConsumer} from '../../context'
import Clothes from './Clothes'
import Title from '../../UI/Title'

const ClothesList = () => {
    return (
    <React.Fragment>
        <Title modify="u-capitalize-text u-center-text" name="Available" title="boutique de jeur" after="products"/>
        <main className="clothes">
            <ClothesConsumer>
                {(value) => {
                   return value.products.map(product => {
                       return <Clothes key={product.id} product={product} />
                   })
                }}
            </ClothesConsumer>
        </main>
    </React.Fragment>
    )
}

export default ClothesList