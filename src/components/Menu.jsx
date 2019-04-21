import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import '../styles/Menu.scss'

const Menu = ({
    products
}) => {
    let badgeQuantity = products.filter( product => product.quantityInCart > 0 ).reduce(
        (accumulator,currentValue) => +accumulator + currentValue.quantityInCart, 0 
    )

    let badgeClasses = classNames(
        'nav__quantity', 
        {visible: products.filter( product => product.quantityInCart > 0 ).length > 0}
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
            
            <NavLink 
                to="/cart" 
                className="nav__link" 
                activeClassName="is-active" 
                exact={true}
            >Cart<span className={badgeClasses}>{badgeQuantity}</span>
            </NavLink>
        </nav>
    )
}

Menu.propTypes = {
    products: PropTypes.array
}

export default Menu