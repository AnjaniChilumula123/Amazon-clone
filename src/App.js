
import './App.css';
import Header from './Header';
import ImageSlider from './ImageSlider';
import Cards from './Cards';
import Footer from './Footer';
import Products from './Products';
import {BrowserRouter ,Redirect,Route,Routes,Switch } from 'react-router-dom';
 import Login from './Login';
 import Checkout from './Checkout';
 import SignUp from './SignUp';
import Payment from './Payment';
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';
import {useEffect} from 'react';


function App(){
   

 const [{}, dispatch]=useStateValue();
  useEffect(()=>{
     auth.onAuthStateChanged(authUser=>{
      console.log('user is-->',authUser);
      if(authUser){
        //user just logged in / user was logged in
        dispatch({
          type : 'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
     })
},[])


    //BEM
   

    
    const Home = ()=>
    {
    return (
      <div className="app">
          <div className='page-container'>
            <div className='content-wrap'>
              <Header/>
              <ImageSlider/>
              <Cards/>
              <Footer/>
            </div>
          </div>
      </div>
      );
    }
    return(

    <div>
      
    <div className="app">
    <div className='page-container'>
      <div className='content-wrap'>
          <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path ="/checkout" element={<Checkout/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path='/signup' element={<SignUp/>}/>

          {/* <Redirect To="/"/> */}
          </Routes>   
          </div>
         
    </div>
   </div>
  
   </div>
    )

}

export default App;
