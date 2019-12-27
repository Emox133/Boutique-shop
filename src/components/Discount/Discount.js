import React from 'react'
import {Link} from 'react-router-dom'

import Title from '../../UI/Title'
import Button from '../../UI/Button/Button'
import DiscountPrice from './DiscountPrice'

const Discount = () => {
    return (
       <section className="discount pos-rel">
           <article className="discount__topic u-center-text">
                <Title modify="u-uppercase-text text-white" name="get 10% off only for" title="new year"/>
            <Link to="/clothes">
                <Button name="discount__button">Continue Shopping</Button>
            </Link>
           </article>

           <div className="discount__price-box">
                <DiscountPrice count="0" sign="$" title="no money down"/>
                <hr className="discount__line--rotated"/>

                <DiscountPrice count="58" sign="$" title="for 39 months"/>
                <hr className="discount__line--rotated"/>

                <DiscountPrice count="0" sign="%" title="apr financing"/>
           </div>

           <div className="discount__footer d-flex">
                <hr className="discount__line--horizontal"/>
                <h1 className="discount__footer-title">Peloton Membership Separate</h1>
           </div>
       </section>
    )
}

export default Discount
