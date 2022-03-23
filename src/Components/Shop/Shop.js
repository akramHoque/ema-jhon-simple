import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Item from '../Item/Item';
import Cart from './Cart/Cart';
import './Shop.css';



const Shop = () => {
      const [products, setProducts] = useState([]);
      const [cart, setCart] = useState([]);


      useEffect(() => {
            fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
      }, [])

      useEffect(() => {
            const storedCart = getStoredCart();
            for(const id in storedCart ){
                 const addedProducts = products.find(product => product.id === id);
                 console.log(addedProducts);
            }
      }, [])

      const handleAddToCart = (product) =>{

            const newCart = [...cart, product] ;
            console.log(newCart);
            setCart(newCart);
            addToDb(product.id)
            
      }


      return (
            <div className='shop-container'>
                  <div className="products-container">
                      {
                           products.map( product => <Item 
                              key={product.id}
                              product = {product}
                              handleAddToCart = {handleAddToCart}
                              ></Item>)
                      }
                  </div>

                  <div className="cart-container">
                        <Cart cart = {cart}></Cart>
                  </div>

            </div>
      );
};

export default Shop;