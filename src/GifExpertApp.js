import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGridApp } from './components/GifGrid';
// import PropTypes from 'prop-types'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Monkey']);

    return (
        <>
            <h2>Gif Expert App</h2>

            <AddCategory setCategories={ setCategories }/>

            <hr />


            <ol>
                { 
                    categories.map((category) => (
                        <GifGridApp key={category} category={category} />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;

