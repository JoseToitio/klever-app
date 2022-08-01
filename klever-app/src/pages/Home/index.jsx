import React from "react";
import Header from "../../components/header/index";
import { useNavigate } from "react-router-dom";

import './home.css';

export default function Home() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/editToken')
  } 
  return (
    <div className="home">
      <Header 
        className="button-add-token"
        datatest="btn-add-token"
        name="Add Token"
        funcClick={handleClick}
      />
    </div>
  );
}
