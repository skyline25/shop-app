import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
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
            <Typography
                component="p"
                variant="subtitle2"
                inline
            >Sort by: </Typography>
            {Object.keys(options).map((item, i) =>
                <Button
                    key={i}
                    onClick={event=>onSelect(event, options[item])}
                    color={(sort === options[item]) ? "primary" : "default"}
                >{item}</Button>
            )}
        </div>
    )
}

SortMenu.propTypes = {
    sort: PropTypes.string,
    onSelect: PropTypes.func
}

export default SortMenu