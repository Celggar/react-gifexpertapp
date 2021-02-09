import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch Man']);

    /* const handleOnclick = (inputValue) => {
        const newCat = [...categories, inputValue];
        setCategories(newCat);
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleOnclick}>Agregar</button> */}
            <ol>
                {/* Se recomienda que el key no sea el index */}
                {categories.map(item => (<GifGrid key={item} category={item} />))}
            </ol>
        </>
    );
}

export default GifExpertApp;