import React from 'react';
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from './StateProvider';
import { getBasketTotal} from './reducer';
import {useNavigate} from 'react-router-dom'


export default function App() {
  const navigate=useNavigate();
  const [{basket},dispatch]=useStateValue();
  return (
    <div className="subtotal">
      

      <CurrencyFormat
        renderText={(value) => (
          <>
       
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <span className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </span>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e=> navigate('/payment')}>Proceed to Checkout</button>
   
    </div>
  );
}
