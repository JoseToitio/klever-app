import React, { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import "./addToken.css";

export default function TokenForm({ namePage }) {
  const [inputToken, setInputToken] = useState("");
  const [inputBalance, setInputBalance] = useState("");
  const navigate = useNavigate();
  let tokens = JSON.parse(localStorage.getItem("tokens")) || [];

  const addToLocalStorage = () => {
    const getToken = JSON.parse(localStorage.getItem("tokens")) || [];
    if (!inputToken || !inputBalance) {
      alert("Preencha os dados!");
    } else if (getToken.filter((t) => t.token === inputToken).length > 0) {
      alert("Token ja existe")
    } else {
      tokens.push({
        token: inputToken,
        balance: inputBalance,
      });
      localStorage.setItem("tokens", JSON.stringify(tokens));
      navigate('/');
    }
  };
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
            type="text"
            id="token"
            name="token"
            value={inputToken}
            required
            data-testid="input-token"
            onChange={({ target }) => setInputToken(target.value)}
          ></input>
        </div>
        <label htmlFor="balance">Balance</label>
        <input
          type="text"
          id="balance"
          name="balance"
          required
          value={inputBalance}
          data-testid="input-balance"
          onChange={({ target }) => setInputBalance(target.value)}
        ></input>
        <div className="button-save">
          <Button
            size="small"
            variant="contained"
            style={{ backgroundColor: "#af00be" }}
            data-testid="btn-save"
            onClick={addToLocalStorage}
          >
            Save
          </Button>
        </div>
      </Container>
    </div>
  );
}
