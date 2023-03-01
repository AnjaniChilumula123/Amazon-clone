import React from 'react';
import './CheckoutProducts.css';
import { useStateValue } from './StateProvider';

function CheckoutProducts({id,image,title,price,rating}) {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>
    {
        dispatch({
            type :'REMOVE_FROM_BASKET',
            id:id,
        })
    }
  return (
    <div className='checkoutProducts'>
        <img className='checkoutProducts__image' src={image} />
        <div className='checkoutProducts__info'>
            <p className='checkoutProducts__title'><strong>{title}</strong></p>
            <p className='checkoutProducts__price'>
                <strong>$</strong>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProducts__rating'>
            {Array(rating)
            .fill()
            .map((_,i)=>
            (
              <p>⭐</p>
            ))}
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>

  )
}

export default CheckoutProducts