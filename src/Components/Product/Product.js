import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, price, id} = props.product
    return (
        <div className='product'>
            <h4>Product Name: {name}</h4>
            <h6>Price: {price}</h6>
            <p>Id: {id}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;