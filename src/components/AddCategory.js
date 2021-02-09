import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddCategory({ setCategories }) {
    const [inputValue, setInputValue] = useState(String);

    const handleOnChange = ({ target: { value } }) => setInputValue(value);

    const handleOnSubmit = e => {
        e.preventDefault();
        if (inputValue.trim().length > 0) {
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }
    };

    const handleCleanAll = e => {
        e.preventDefault();
        setCategories([]);
        setInputValue('');
    };

    return (
        <form onSubmit={handleOnSubmit} >
            <input value={inputValue} onChange={handleOnChange} />
            <button onClick={handleOnSubmit} >AddCategory</button>
            <button onClick={handleCleanAll} >Clean All</button>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;