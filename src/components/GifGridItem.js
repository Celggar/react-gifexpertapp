import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = props => {
    const { title, url } = props.image;

    return (
        <div className="card animate__animated animate__pulse" >
            <img src={url} alt={title} />
            {title && (
                <p>{title}</p>
            )}
        </div>
    )
}

GifGridItem.propTypes = {
    image: PropTypes.object
}

export default GifGridItem
