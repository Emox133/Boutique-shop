import React from 'react'
import {ClothesConsumer} from '../../context'
import Clothes from './Clothes'
import Title from '../../UI/Title'
import { items } from '../../clothes'

const ClothesList = () => {
    return (
    <React.Fragment>
        <Title modify="u-capitalize-text u-center-text" name="Dostupni" title="Modeli"/>
        <main className="clothes">
            <ClothesConsumer>
                {(value) => {
                   return items.map(product => {
                       return <Clothes key={product.id} product={product} />
                   })
                }}
            </ClothesConsumer>
        </main>
    </React.Fragment>
    )
}

export default ClothesList