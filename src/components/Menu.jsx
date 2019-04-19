import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import '../styles/Menu.scss'

const Menu = ({
    products
}) => {
    let quantityBadge = products.filter( product => product.quantityInCart>0 ).reduce(
        (accumulator,currentValue) => +accumulator+currentValue.quantityInCart, 0
    )

    return (
        <nav className="nav">
            <NavLink 
                to="/" 
                className="nav__link" 
                activeClassName="is-active" 
                exact={true}
            >Home</NavLink>
            
            <NavLink 
                to="/catalog" 
                className="nav__link" 
                activeClassName="is-active" 
                exact={true}
            >Catalog</NavLink>

            <Badge color="secondary" badgeContent={quantityBadge}>
                <NavLink 
                    to="/cart" 
                    className="nav__link" 
                    activeClassName="is-active" 
                    exact={true}>
                        Cart
                        
                    {/* Case with manual Badge 
                    <span className={products.filter(product=>product.quantityInCart>0).length>0?
                        `nav__quantity visible`:
                        `nav__quantity`}
                    >{quantityBadge}</span> */}
                </NavLink>
            </Badge>
        </nav>
    )
}

Menu.propTypes = {
    products: PropTypes.array
}

export default Menu