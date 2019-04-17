import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/Menu.scss'

const Menu = ({
    products
}) => {
    return (
        <nav className="nav">
            <NavLink 
                to="/" 
                className="nav__link" 
                activeClassName="is-active" 
                exact={true}>Home</NavLink>
            <NavLink 
                to="/catalog" 
                className="nav__link" 
                activeClassName="is-active" 
            exact={true}>Catalog</NavLink>
            <NavLink 
                to="/cart" 
                className="nav__link" 
                activeClassName="is-active" 
                exact={true}>Cart
                <span className={products.filter(product=>product.quantityInCart>0).length>0?
                    `nav__quantity visible`:
                    `nav__quantity`}
                >{
                    // Products type quantity
                    // products.filter(
                        // product => product.quantityInCart>0
                    // ).length
                    products.filter(
                        product => product.quantityInCart>0
                    ).reduce(
                        (accumulator,currentValue) => 
                            +accumulator+currentValue.quantityInCart, 0
                    )
                }</span>
            </NavLink>
        </nav>
    )
}

export default Menu