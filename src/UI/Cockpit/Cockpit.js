import React from 'react'
import {Link} from 'react-router-dom'

import Title from '../Title'
import Button from '../Button/Button'

const Cockpit = () => {
    return (
        <section className="cockpit p-rel">
            <div className="cockpit__content u-center-text">
                <Title modify="u-center-text u-capitalize-text" name="Primjer" title="Web Prodavnice"/>

            <Link to="/clothes">
                <Button btnType="main" name="cockpit__button">
                    Kupovina
                </Button>
            </Link>
            </div>
        </section>
    )
}

export default Cockpit
