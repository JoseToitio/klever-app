import React, { useState } from "react";
import Header from "../../components/header";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import "./editToken.css";

export default function TokenForm({namePage}) {
  const [inputToken, setInputToken] = useState('');
  const [inputBalance, setInputBalance] = useState('');

  let tokens = JSON.parse(localStorage.getItem('tokens')) || [];

  const addToLocalStorage = () => {
    tokens.push({
      token: inputToken,
      balance: inputBalance
    })
    localStorage.setItem('tokens', JSON.stringify(tokens));
  }
  return (
    <div>
      <Header name="Voltar" className="button-back" />
      <Container
        maxWidth="sm"
        className="container"
        style={{ display: "flex" }}
      >
        <p style={{ fontWeight: "bold" }}>{namePage}</p>
        <Button size="sm" variant="contained" className="btnBack">
          Voltar
        </Button>
      </Container>
      <Container
        style={{ display: "flex", paddingRight: "110px", paddingLeft: "115px" }}
        maxWidth="sm"
        className="form-group"
      >
        <div className="div-label">
          <label for="token">Token</label>
          <input type="text" id="token" name="firstname" onChange={({target}) => setInputToken(target.value)}></input>
        </div>
        <label for="balance">Balance</label>
        <input type="text" id="balance" name="balance" onChange={ ({target}) => setInputBalance(target.value) }></input>
        <div className="button-save">
          <Button
            size="small"
            variant="contained"
            style={{ backgroundColor: "purple" }}
            onClick={ addToLocalStorage }
          >
            Save
          </Button>
        </div>
      </Container>
    </div>
  );
}
