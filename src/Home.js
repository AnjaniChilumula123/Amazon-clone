/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */

import React from 'react'
import './Home.css'
import ImageSlider from './ImageSlider'
import Cards from './Cards'
import {BrowserRouter as Router,Route , Switch} from 'react-router-dom';

import App from './App';
import Products from './Products';

function Home() {
  return (
    <div className='home'>
          {/* <img className="home__image" src="./images/salebanner.jpg"></img> */}
           {/* <ImageSlider/> */}
          
          {/* <Router>
           <Cards/>
                <Switch>
                    <Route path="/products" exact component={Products}/>
                    < Route path="/" exact component={App}/>
               </Switch>
           </Router> */}


    </div>
  )
}

export default Home