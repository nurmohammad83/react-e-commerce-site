import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,price,img,ratings,seller}= props.product
    const {handelAddToCart,product}= props
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <p className='product-name'>{name}</p>
            <p style={{fontWeight:'bold'}}>Price: {price}</p>
            <p><small>Manufacturer : {seller}</small></p>
            <p><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={()=>handelAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;