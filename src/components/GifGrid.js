import React from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    const { loading, data:images } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading ...</p>}
            <div className="card-grid">
                {
                    images.map(image => (<GifGridItem key={image.id} image={image} />))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string
}

export default GifGrid
