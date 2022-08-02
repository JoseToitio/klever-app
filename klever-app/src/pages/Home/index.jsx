import React, { useState, useEffect } from "react";
import Header from "../../components/header/index";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { BiEdit } from "react-icons/bi";
import "./home.css";

export default function Home() {
  let navigate = useNavigate();
  const [tokens, setTokens] = useState([]);
  const handleClick = () => {
    navigate("/addToken");
  };
  const getLocalStorage = () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    setTokens(tokens);
  };

  useEffect(() => {
    getLocalStorage();
  }, []);
  return (
    <div className="home">
      <Header
        className="button-add-token"
        datatest="btn-add-token"
        name="Add Token"
        funcClick={handleClick}
      />
      <Container className="container-tokens" maxWidth="sm" style={{paddingLeft: 115, paddingRight: 80}}>
        <p className="token">Tokens</p>
        <p className="balance">Balance</p>
      </Container>
      <Container maxWidth="sm" style={{paddingLeft: 100, paddingRight: 80}}>
        {tokens &&
          tokens.map((t, index) => (
            <div key={index} className="container-items" >
              <div style={{display: 'flex', alignItems: 'center'}}>
                <BiEdit />
                <p style={{paddingLeft:'5px'}}className="token">{t.token}</p>
              </div>
              <p className="balance">{t.balance}</p>
            </div>
          ))}
      </Container>
    </div>
  );
}
