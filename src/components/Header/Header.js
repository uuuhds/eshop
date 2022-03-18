import React from "react";
import { ShoppingBasket, Storefront, Search } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useStore } from "../../store";

function Header() {
  const [{ basket, login }, dispatch] = useStore();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <Storefront className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">eShop</h2>
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="nav__item">
            {!login ? (
              <>
                <span className="nav__itemLineOne">Hello Guest</span>
                <span
                  className="nav__itemLineTwo"
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </span>
              </>
            ) : (
              <>
                <span className="nav__itemLineOne">uuuhds</span>
                <span className="nav__itemLineTwo" onClick={logout}>
                  Sign out
                </span>
              </>
            )}
          </div>
        </Link>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your </span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__item nav__itemBasket">
            <ShoppingBasket className="" />
            <span className="nav__itemLineTwo nav__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
