import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/layout/Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import webFont from 'webfontloader';
import React from 'react';
import Home from './components/Home/Home.js';
import ProductDetails from './components/Product/ProductDetails';
import Products from './components/Product/Products';
import Search from './components/Product/Search';
import LoginSignUp from './components/User/LoginSignUp';
import Cart from './components/Cart/Cart';
import ConfirmOrder from './components/Cart/ConfirmOrder';
import { useSelector } from 'react-redux';
import store from './store';
import { loadUser } from './actions/userAction';
import UserOptions from './components/layout/Header/UserOptions';
import Profile from './components/User/Profile';
import ProtectedRoute from './components/routes/ProtectedRoutes';
import UpdateProfile from './components/User/UpdateProfile';
import UpdatePassword from './components/User/UpdatePassword.js';
import ForgotPassword from './components/User/ForgotPassword';
import ResetPassword from './components/User/ResetPassword';
import Shipping from './components/Cart/Shipping';
import Payment from './components/Cart/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from './components/Cart/OrderSuccess.js';
import MyOrders from './components/Order/MyOrders';
import OrderDetails from './components/Order/OrderDetails';
import DashBoard from './components/admin/DashBoard';
import ProductList from './components/admin/ProductList';
import NewProduct from './components/admin/NewProduct';
import UpdateProduct from './components/admin/UpdateProduct';
import OrderList from './components/admin/OrderList';
import ProcessOrder from './components/admin/ProcessOrder';
import UsersList from './components/admin/UsersList';
import UpdateUser from './components/admin/UpdateUser';
import Contact from './components/layout/Contact/Contact';
import About from './components/layout/About/About';
import NotFound from './components/layout/NotFound/NotFound';
import { API } from './global';
function App() {
  const { isAuthenticated, user } = useSelector(state => state.user);

  const [stripeApiKey, setStripeApiKey] = useState('');
  useEffect(() => {
    const getStripeapiKey = async () => {
      try {
        if (isAuthenticated) {
          const { data } = await axios.get(`${API}/api/v1/stripeapikey`);
          setStripeApiKey(data.stripeApiKey);
        }
      } catch (err) {
        return console.log('error>>', err);
      }
    };
    getStripeapiKey();
  }, [isAuthenticated]);

  useEffect(() => {
    webFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'hilanka'],
      },
    });

    store.dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<About />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/login" element={<LoginSignUp />} />

        <Route path="/password/forgot" element={<ForgotPassword />} />

        <Route path="/password/reset/:token" element={<ResetPassword />} />

        {/* protected route */}

        <Route path="/cart" element={<ProtectedRoute Component={Cart} />} />

        <Route
          path="/account"
          element={<ProtectedRoute Component={Profile} />}
        />
        <Route
          path="/me/update"
          element={<ProtectedRoute Component={UpdateProfile} />}
        />
        <Route
          path="/password/update"
          element={<ProtectedRoute Component={UpdatePassword} />}
        />
        <Route
          path="/login/shipping"
          element={<ProtectedRoute Component={Shipping} />}
        />

        <Route
          path="/success"
          element={<ProtectedRoute Component={OrderSuccess} />}
        />

        <Route
          path="/orders"
          element={<ProtectedRoute Component={MyOrders} />}
        />

        <Route
          path="/order/confirm"
          element={<ProtectedRoute Component={ConfirmOrder} />}
        />

        <Route
          path="/order/:id"
          element={<ProtectedRoute Component={OrderDetails} />}
        />

        <Route
          path="/admin/dashboard"
          element={<ProtectedRoute isAdmin={true} Component={DashBoard} />}
        />

        <Route
          path="/admin/products"
          element={<ProtectedRoute isAdmin={true} Component={ProductList} />}
        />

        <Route
          path="/admin/product"
          element={<ProtectedRoute isAdmin={true} Component={NewProduct} />}
        />

        <Route
          path="/admin/product/:id"
          element={<ProtectedRoute isAdmin={true} Component={UpdateProduct} />}
        />

        <Route
          path="/admin/orders"
          element={<ProtectedRoute isAdmin={true} Component={OrderList} />}
        />

        <Route
          path="/admin/order/:id"
          element={<ProtectedRoute isAdmin={true} Component={ProcessOrder} />}
        />

        <Route
          path="/admin/users"
          element={<ProtectedRoute isAdmin={true} Component={UsersList} />}
        />

        <Route
          path="/admin/user/:id"
          element={<ProtectedRoute isAdmin={true} Component={UpdateUser} />}
        />

        {/* NotFound */}

        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route path="/404" element={<NotFound />} />

        {/*  Please call Stripe() with your publishable key. You used an empty
       string. To solve it add && condition */}

        {stripeApiKey && (
          <Route
            path="/payment/process"
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                <ProtectedRoute Component={Payment} />
              </Elements>
            }
          />
        )}
      </Routes>
    </Fragment>
  );
}

export default App;
