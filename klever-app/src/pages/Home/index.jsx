import React from "react";
import logo from "../../images/assets/logo.svg";
import star from "../../images/assets/shooting-star.svg";
import './home.css';

export default function Home() {
  return (
    <div className="home">
      <div>
        <img src={logo} alt="logo-klever" style={{maxWidth: '40px'}}data-testid="logo-klever" />
      </div>
      <div className="nav-items">
        <img
          className="star-img"
          src={star} 
          alt="shooting-star" 
        />
        <p className="walletP">Wish Wallet</p>
        <button data-testid="btn-add-token" type="button">Add Token</button>
      </div>
    </div>
  );
}
