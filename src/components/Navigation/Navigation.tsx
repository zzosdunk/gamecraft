import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useShoppingCart } from "../../context/ShoppingCartContext";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

import Hamburger from "../../assets/images/menu.png";
import CartIcon from "../../assets/images/cart.png";
import ShoppingCart from "../../assets/images/shoppingCart.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { openCart, cartQuantity } = useShoppingCart();

  const LINKS = [
    { title: "Main Page", link: "/" },
    { title: "Products", link: "/products" },
    { title: "Contact", link: "/contact" },
  ];

  const navStyles = toggleMenu
    ? "dz__navbar-mobile_menu_container-open"
    : "dz__navbar-mobile_menu_container";

  const cartStyles = isOpen ? "sub-menu-wrap-open" : "sub-menu-wrap";

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(1)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <>
      <div className="dz__navbar">
        <div className="dz__navbar-menu">
          <img
            src={Hamburger}
            className="menu-icon"
            alt="mobileNavbar"
            onClick={() => setToggleMenu((prev) => !prev)}
          />
          {toggleMenu && (
            <div className={navStyles}>
              <div className="dz__navbar-mobile_menu_container-links">
                {LINKS.map((link) => (
                  <NavLink key={link.title} to={link.link}>
                    {link.title}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="dz__navbar-links">
          <div className="dz__navbar-links_container">
            {LINKS.map((link) => (
              <NavLink key={link.title} to={link.link}>
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>

        <div onClick={() => setIsOpen((prev) => !prev)} className="cartIcon">
          {cartQuantity > 0 ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <img src={CartIcon} alt="cart-icon" />
            </StyledBadge>
          ) : (
            <img src={CartIcon} alt="cart-icon" />
          )}
        </div>
      </div>
      <div className={cartStyles}>
        <div className="sub-menu">
          <div className="user-info">
            <h1>Cart</h1>
          </div>
          <hr />
          <div
            className="sub-menu-link"
            onClick={() => {
              setIsOpen(false);
              openCart();
            }}
          >
            <div className="icon">
              <img src={ShoppingCart} alt="addCart" />
            </div>
            <p>View Cart</p>
            <span className="cartQuantity">{cartQuantity}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
