import Link from 'next/link';

import React, { useState, useEffect } from 'react';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className='email-msg'>Check your email for the receipt</p>
        <p className='description'>
          Please email
          <a className='email' href='mailto:maladkar.ninad@gmail.com'>
            maladkar.ninad@gmail.com
          </a>{' '}
          in case you have any queries
        </p>
        <Link href='/'>
          <button className='btn' type='button' width='300px'>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
