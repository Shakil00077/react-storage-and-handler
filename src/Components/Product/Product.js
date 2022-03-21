import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, id } = props.product

    const addToCart = (id) => {
        console.log('product added', id);
    }

    // const addToCartWithPara = () => addToCart(id)

    return (
        <div className='product'>
            <h4>Product Name: {name}</h4>
            <h6>Price: {price}</h6>
            <p>Id: {id}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            {/* <button onClick={addToCartWithPara}>Add to Cart2</button> */}
        </div>
    );
};

export default Product;