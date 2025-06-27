// src/state/depositMoney.js
export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'deposit',
      payload: amount,
    });
  };
};
