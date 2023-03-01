import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Item from './Item';
import './Products.css'

function Products() {
  return (
    <div >
      <Header />
      <div class="row">
      <div class="col-2 offset-1">
       <h3>Price</h3>
       <h4>All</h4>
       <a href="#" ><h6>Under ₹500</h6> </a>
       <a href="#" ><h6> ₹500 to ₹1000</h6> </a>
       <a href="#" ><h6>₹1000 ₹2000</h6> </a>
       <a href="#" ><h6> ₹2000 ₹3000</h6> </a>
       <a href="#" ><h6>₹5000 and Above </h6> </a>

         <h4>Discount</h4>
       <a href="#" ><h6> All deals</h6> </a>
       <a href="#" ><h6>10% off or more</h6> </a>
       <a href="#" ><h6> 20% off or more</h6> </a>
       <a href="#" ><h6> 50% off or more</h6> </a>
       
       <h4>Deal type</h4>
       <a href="#" ><h6> All deals</h6> </a>
       <a href="#" ><h6>Deal of the day</h6> </a>
       <a href="#" ><h6> Lightning deal</h6> </a>
       <a href="#" ><h6> Best deal</h6> </a>
        </div>
 
      
      <div class="col-4">
      <Item id="111"title="Kasba-Line Cotton Macrame Wall Hanging Shelf | Handmade (Musturd Yellow & White)" price={1299} image="./images/Amazon-Emblem.jpg" rating={3}/> 
      <Item id="222"title="Curio Centre Round Cotton Home Swing & Hammock Chair (135 Cm X 57 Cm X 43 Cm, White)
      " price={1299} image="./images/Amazon-Emblem.jpg" rating={5} />
      </div>
      <div class="col-4">
      <Item id="333"title="Decazone Macrame Wall Hanging Shelf Wood Floating Boho Shelves with Wooden Dowel Modern Chic  55 x 43 cm
      " price={1299} image="./images/Amazon-Emblem.jpg" rating={4} />
        <Item id="444"title="Wooden Twist Rafuf Wooden Intersecting Wall Shelves (Set of 8) (Standard, Red & Black)
      " price={1299} image="./images/Amazon-Emblem.jpg" rating={4} />
      </div>
      </div>
    
       
      
      <Footer />
    </div>
  )
}

export default Products