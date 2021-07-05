import React from 'react'
import {Link} from 'react-router-dom'

import Title from '../../UI/Title'
import Button from '../../UI/Button/Button'
import DiscountPrice from './DiscountPrice'

const Discount = () => {
    return (
       <section className="discount pos-rel">
           <article className="discount__topic u-center-text">
                <Title modify="u-uppercase-text text-white" name="10% popusta" title="samo za praznike"/>
            <Link to="/clothes">
                <Button name="discount__button">Nastavite sa kupovinom</Button>
            </Link>
           </article>

           <div className="discount__price-box">
                <DiscountPrice count="50" sign="%" title="majice"/>
                <hr className="discount__line--rotated"/>

                <DiscountPrice count="20" sign="%" title="pantole"/>
                <hr className="discount__line--rotated"/>

                <DiscountPrice count="30" sign="%" title="patike"/>
           </div>

           <div className="discount__footer d-flex">
                <hr className="discount__line--horizontal"/>
                <h1 className="discount__footer-title">Premium članstvo</h1>
           </div>
       </section>
    )
}

export default Discount
