import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useNavigate, useParams } from "react-router-dom";
import "./editToken.css";

export default function TokenEdit({ namePage }) {
  const params = useParams();
  const [inputToken, setInputToken] = useState(params.name.split('-')[0]);
  const [inputBalance, setInputBalance] = useState(params.name.split('-')[1]);
  const navigate = useNavigate();

  let tokens = JSON.parse(localStorage.getItem("tokens")) || [];

  const addToLocalStorage = () => {
    if (!inputToken || !inputBalance) {
      alert("Preencha os dados!");
    } else {
      const newTokens = tokens.filter((t) => t.token !== params.name.split('-')[0])
      newTokens.push({
        token: inputToken,
        balance: inputBalance,
      });
      localStorage.setItem("tokens", JSON.stringify(newTokens));
      navigate('/');
    }
  };
  
  const removeToLocalStorage = () => {
    if (window.confirm('Você deseja excluir esse Token?')) {
      // Save it!
      const removeToken = tokens.filter((t) => t.token !== params.name.split('-')[0])
      localStorage.setItem("tokens", JSON.stringify(removeToken));
      navigate('/');
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }

  return (
    <div>
      <Container
        maxWidth="sm"
        className="container"
        style={{ display: "flex" }}
      >
        <p style={{ fontWeight: "bold" }}>{namePage}</p>
        <Button
          size="sm"
          variant="contained"
          className="btnBack"
          onClick={() => navigate("/")}
        >
          Voltar
        </Button>
      </Container>
      <Container
        style={{ display: "flex", paddingRight: "110px", paddingLeft: "115px" }}
        maxWidth="sm"
        className="form-group"
      >
        <div className="div-label">
          <label htmlFor="token">Token</label>
          <input
            style={{fontWeight: "bold", fontSize: "18px"}}
            type="text"
            id="token"
            name="firstname"
            value={inputToken}
            onChange={({ target }) => setInputToken(target.value)}
          ></input>
        </div>
        <label htmlFor="balance">Balance</label>
        <input
          type="text"
          style={{fontWeight: "bold", fontSize: "18px"}}
          id="balance"
          name="balance"
          value={inputBalance}
          onChange={({ target }) => setInputBalance(target.value)}
        ></input>
        <div className="button-save">
        <Button
            size="small"
            variant="contained"
            style={{ backgroundColor: "#8d0000" }}
            onClick={removeToLocalStorage}
          >
            Remove
          </Button>
          <Button
            size="small"
            variant="contained"
            style={{ backgroundColor: "#af00be" }}
            onClick={addToLocalStorage}
          >
            Save
          </Button>
        </div>
      </Container>
    </div>
  );
}
