// src/state/withdrawMoney.js
export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'withdraw',
      payload: amount,
    });
  };
};
