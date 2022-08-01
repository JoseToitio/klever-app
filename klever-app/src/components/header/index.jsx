import React from "react";
import logo from "../../images/assets/logo.svg";
import star from "../../images/assets/shooting-star.svg";
import Button from "@mui/material/Button";
import "./header.css";

export default function Header({ datatest, className, name, funcClick }) {
  return (
    <div className="header">
      <div>
        <img
          className="logo-icon"
          src={logo}
          alt="logo-klever"
          data-testid="logo-klever"
        />
      </div>
      <div className="nav-items">
        <img className="star-img" src={star} alt="shooting-star" />
        <p className="walletP">Wish Wallet</p>
        <div className="div-button">
          <Button
            className={className}
            data-testid={datatest}
            type="button"
            variant="contained"
            size="medium"
            onClick={funcClick}
          >
            {name}
          </Button>
        </div>
      </div>
    </div>
  );
}
