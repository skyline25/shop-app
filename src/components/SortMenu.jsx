import React from 'react'
import PropTypes from 'prop-types'
import C from '../constants'
import '../styles/SortMenu.scss'

const options = {
    price: C.SORTED_BY_PRICE,
    title: C.SORTED_BY_TITLE,
    warranty: C.SORTED_BY_WARRANTY
}

const SortMenu = ({ 
    sort=C.SORTED_BY_PRICE, 
    onSelect=f=>f
}) => {
    return (
        <div className="sort-menu">
            <h3 className="sort-menu__header">Sort by: </h3>
            <nav className="sort-menu__list">
                {Object.keys(options).map((item, i) =>
                    <a key={i}
                    href="#"
                    className={(sort === options[item]) ? "sort-menu__item selected" : "sort-menu__item"}
                    onClick={event=>onSelect(event, options[item])}>{item}</a>
                )}
            </nav>
        </div>
    )
}

SortMenu.propTypes = {
    sort: PropTypes.string,
    onSelect: PropTypes.func
}

export default SortMenu