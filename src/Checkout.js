import React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import './Checkout.css'
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProducts from './CheckoutProducts';

function Checkout() {
  const [{basket,user},dispatch]=useStateValue();
  return (
    <div>
      <Header />
      <div className='checkout'>
        <div class="row">
       
        </div>
        <div className='checkout__left'>
          <img  className="checkout__ad " src='./images/Amazon-Emblem.jpg'/>
        <div >
          <h3>Hello, {user?.email}</h3>
        <h2 className='checkout__title'>Your Shopping Basket</h2>
             {basket.map(item=>(
              <CheckoutProducts
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
             ))}
           </div>
        </div>
        <div >
        <h2 className='checkout__right'><Subtotal /></h2>
        </div>
     
      </div>
      <Footer />
    </div>

  )
}

export default Checkout
