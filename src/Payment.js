
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { useStateValue } from './StateProvider';
import  CheckoutProducts from './CheckoutProducts'
 import './Payment.css';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';
function Payment() {
  const [{basket,user},dispatch]=useStateValue();
  return (
 <>
   <Header/>
   <div className='payment'>  
     <div className='payment__container'>
      <h1>Checkout (<Link to="/checkout"> {basket?.length}items</Link>)</h1>
      <div className='payment__section'>
        <div className='payment__title'>
           <h4>Delivery Address</h4>
        </div>
        <div className='payment__address'>
              <p>{user?.email}</p>
              <p>vdfdsbfbbs</p>
              <p>fvcfff</p>
        </div>

      </div>
      <div className='payment__section'>
        <div className='payment__title'>
           <h4>Review item and delivery</h4>
        </div>
        <div className='payment__items'>
          {basket.map(item=>(
            <CheckoutProducts
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
              
        </div>

      </div>
      <div className='payment__section'>
        <div className='payment__title'>
           <h4>Payment Method</h4>
        </div>
        <div className='payment__details'>
             
        </div>

      </div>

     </div>
    
   </div>
   <Footer/>
   </>
  )
 
  
}

export default Payment