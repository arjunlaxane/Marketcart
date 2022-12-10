import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './OrderSuccess.css';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { removeItemsFromCart } from '../../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';

const OrderSuccess = () => {
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const payMoney = async () => {
    for (let i = 0; i < cartItems.length; i++) {
      const ID = await cartItems[i].product;
      dispatch(removeItemsFromCart(ID));
    }
  };

  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link onClick={payMoney} to="/orders">
        View Orders
      </Link>
    </div>
  );
};

export default OrderSuccess;
