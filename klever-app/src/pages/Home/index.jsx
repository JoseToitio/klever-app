import React from "react";
import Header from "../../components/header/index";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container"
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
      <Container
       className="container-tokens"
       maxWidth="sm"
      >
        <p className="token">Tokens</p>
        <p className="balance">Balance</p>
      </Container>
      <Container maxWidth="sm">

      </Container>
    </div>
  );
}
