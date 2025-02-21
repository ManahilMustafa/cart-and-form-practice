
import React from 'react';

export default function Footer(props) {
  return (
    <div className='row fixed-bottom'>
      <button className='btn btn-danger col-2' onClick={() =>{
        props.resetQuantity()
      }}>Reset</button>
      <div className='col-8 bg-dark text-white text-center'>
        {/* Displaying total amount with a currency format */}
        <h4>Total Amount: RS.{props.totalAmount}</h4>
      </div>
      <button className='btn btn-primary col-2'>Pay Now</button>
    </div>
  );
}

