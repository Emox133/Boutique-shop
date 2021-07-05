import React from 'react'
import {ClothesConsumer} from '../../context'
import Button from '../../UI/Button/Button'
import BlackShirt from './../../images/black-t-shirt.jpg'
import {items} from './../../clothes'
import { useHistory } from 'react-router'

const Clothes = (props) => {
    const {id, title, price, manufacturer, image, inBag} = props.product.fields;
    const history = useHistory()
    console.log(history)

return(
    <ClothesConsumer>
        {value => {
            const {addToBag} = value;

            return (
                <div className="clothes__product" id={id}>
                    <div className="clothes__image-container">
                        <img className="clothes__image" src={BlackShirt} alt="product"/>
                        {inBag ? 
                        (<Button name="clothes__btn--inBag u-capitalize-text u-center-text" btnType="main" disabled={inBag}>
                            in bag
                        </Button>)
                            : 
                        (<Button name="clothes__btn u-capitalize-text u-center-text" btnType="main" clicked={() => addToBag(id, history)}>
                                u korpu<i className="fas fa-shopping-bag"></i>  
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
