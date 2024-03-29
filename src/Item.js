import React from 'react';
import './Products.css';
import {useStateValue} from './StateProvider'; 
import reducer from './reducer';
function Item({id,title,price,image,rating}) {

const [{basket},dispatch] =useStateValue();

const addToBasket=()=>{
    //dispatch the item into the datalayer
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
    
  };
  return (
   
    <div className='product__row'>
      <div className='product'>
        <div className='product__info'>
          <p>{title}</p>
          <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='product__rating'>
            {Array(rating)
            .fill()
            .map((_,i)=>
            (
              <p>⭐</p>
            ))}
                
          </div>

        </div>
        <img  src={image} alt="" ></img>
        <button onClick={addToBasket}>Add to Basket</button>


      </div>
      </div>
  )
}

export default Item