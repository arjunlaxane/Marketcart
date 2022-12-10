import React from 'react';
import { ReactNavbar } from 'overlay-navbar';
import marketcart from '../../../images/marketcart.png';
import './Header.css';
const Header = () => {
  return (
    <ReactNavbar
      burgerColorHover="rgb(98, 87, 228)"
      logo={marketcart}
      logoWidth="20vmax"
      navColor1="white"
      logoHoverSize="10px"
      logoHoverColor="rgb(98, 87, 228)"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.3vmax"
      link1Color="rgba(35, 35, 35,0.8)"
      // nav1justifyContent="flex-end"
      // nav2justifyContent="flex-end"
      // nav3justifyContent="flex-start"
      // nav4justifyContent="flex-start"
      link1ColorHover="rgb(98, 87, 228)"
      link1Margin="1vmax"
      profileIconUrl="/login"
      profileIconColor="rgba(35, 35, 35,0.8)"
      searchIconColor="rgba(35, 35, 35,0.8)"
      cartIconColor="rgba(35, 35, 35,0.8)"
      profileIconColorHover="rgb(98, 87, 228)"
      searchIconColorHover="rgb(98, 87, 228)"
      cartIconColorHover="rgb(98, 87, 228)"
      cartIconMargin="1vmax"
    />
  );
};

export default Header;
