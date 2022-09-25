
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts]=useState([])
    const [cart, setCart]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])

    const handelAddToCart= (product)=>{
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product=> <Product
                         key={product.id}
                         product={product}
                         handelAddToCart={handelAddToCart}
                         ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Order Summery</h2>
                <p>Selecte Items: {cart.length}</p>
               
            </div>
        </div>
    )
};

export default Shop;