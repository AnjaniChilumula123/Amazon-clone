
import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import './Cards.css';


function Cards() {
  return (
<div className='container '>
    <div className='row d-flex justify-content-center'>
       <Card className='cards__display col-12 col-sm-3 mt-20'>
          <Card.Body>
              <Card.Title>Upto 60% off</Card.Title>
          </Card.Body>
             <Link  to="/products"><Card.Img variant="top" className="card__image"src="./images/salebanner.jpg" /></Link>
          
       </Card>
     
        
        <Card className='cards__display col-12 col-md-3 mt-20'>
           <Card.Body>
               <Card.Title>Upto 60% off</Card.Title>
           </Card.Body>
           <Link to="/products"><Card.Img variant="top" className="card__image"src="./images/salebanner.jpg" /></Link>
      
        </Card>
  
       <Card className='cards__display col-12 col-md-3 mt-20'>
          <Card.Body>
              <Card.Title>Upto 60% off</Card.Title>
          </Card.Body>
          <Link to="/products"><Card.Img variant="top" className="card__image"src="./images/salebanner.jpg" /></Link>

       </Card> 
       <Card className='cards__display  col-12 col-md-3 mt-20'>
          <Card.Body>
              <Card.Title>Upto 60% off</Card.Title>
          </Card.Body>
          <Link to="/products"><Card.Img variant="top" className="card__image"src="./images/salebanner.jpg" /></Link>
      
       </Card> 
       <Card className='cards__display  col-12 col-md-3 mt-20'>
          <Card.Body>
              <Card.Title>Upto 60% off</Card.Title>
          </Card.Body>
          <Link to="/products" ><Card.Img variant="top" className="card__image"src="./images/salebanner.jpg" /></Link>
          
       </Card> 
  
       <Card className='cards__display col-12 col-md-3 mt-20'>
          <Card.Body>
              <Card.Title>Upto 60% off</Card.Title>
          </Card.Body>
          <Link to="/products" ><Card.Img variant="top" className="card__image"src="./images/salebanner.jpg" /></Link>
       
       </Card> 

    </div>

</div>
  

  )
}

export default Cards