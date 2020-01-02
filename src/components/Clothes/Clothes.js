import React from 'react'
import {ClothesConsumer} from '../../context'
import Button from '../../UI/Button/Button'

const Clothes = (props) => {
    const {id, title, price, manufacturer, image, inBag} = props.product;

return(
    <ClothesConsumer>
        {value => {
            const {addToBag} = value;

            return (
                <div className="clothes__product" id={id}>
                    <div className="clothes__image-container">
                        <img className="clothes__image" src={image} alt="product"/>
                        {inBag ? 
                        (<Button name="clothes__btn--inBag u-capitalize-text u-center-text" btnType="main" disabled={inBag}>
                            in bag
                        </Button>)
                            : 
                        (<Button name="clothes__btn u-capitalize-text u-center-text" btnType="main" clicked={() => addToBag(id)}>
                                add to bag<i className="fas fa-shopping-bag"></i>  
                        </Button>)
                        }
                    </div>
    
                    <div className="clothes__text u-capitalize-text d-flex"> 
                        <h1 className="clothes__title">{title}</h1>
                        <h1 className="clothes__price">${price}</h1>
                        <h1 className="clothes__manufacturer">{manufacturer}</h1>
                    </div>
                </div>
        )
    }}
</ClothesConsumer>
)}

export default Clothes
