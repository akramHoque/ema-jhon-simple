import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Item from '../Item/Item';
import Cart from './Cart/Cart';
import './Shop.css';



const Shop = () => {
      const [products, setProducts] = useProducts();
      const [cart, setCart] = useState([]);


      useEffect(() => {
            const storedCart = getStoredCart();
            for(const id in storedCart ){
                 const addedProducts = products.find(product => product.id === id);
             
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
                        <Cart cart = {cart}>
                              <Link to = '/orders'>
                                    <button>Review order</button>
                              </Link>
                        </Cart>
                  </div>

            </div>
      );
};

export default Shop;