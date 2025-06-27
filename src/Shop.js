// src/Shop.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state'; // Make sure actionCreators is exported correctly from ./state/index.js

const Shop = () => {
  const dispatch = useDispatch();

  // Bind action creators to dispatch
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="text-center mt-4">
      <h2>🏦 State Bank of Harry</h2>
      
      <button
        className="btn btn-danger mx-2"
        onClick={() => withdrawMoney(100)}
      >
        - Withdraw ₹100
      </button>

      <span className="mx-2">Update Balance</span>

      <button
        className="btn btn-success mx-2"
        onClick={() => depositMoney(100)}
      >
        + Deposit ₹100
      </button>
    </div>
  );
};

export default Shop;
