import React, { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import "./addToken.css";

export default function TokenForm({ namePage }) {
  const [inputToken, setInputToken] = useState("");
  const [inputBalance, setInputBalance] = useState("");
  const [tokenError, setTokenError] = useState(false);
  const [tokenExist, setTokenExist] = useState(false);
  const [balanceErro, setBalanceErro] = useState(false);
  const navigate = useNavigate();
  let tokens = JSON.parse(localStorage.getItem("tokens")) || [];

  const addToLocalStorage = () => {
    const getToken = JSON.parse(localStorage.getItem("tokens")) || [];
    if (!inputToken && !inputBalance) {
      setTokenExist(false);
      setTokenError(true);
      setBalanceErro(true);
    } else if (!inputToken) {
      setTokenExist(false);
      setTokenError(true);
      setBalanceErro(false);
    } else if (!inputBalance) {
      setTokenExist(false);
      setTokenError(false);
      setBalanceErro(true);
    } else if (getToken.filter((t) => t.token === inputToken).length > 0) {
      setTokenExist(true);
      setTokenError(false);
      setBalanceErro(false);
    } else {
      tokens.push({
        token: inputToken,
        balance: inputBalance,
      });
      localStorage.setItem("tokens", JSON.stringify(tokens));
      navigate("/");
    }
  };

  const balanceError = () => {
    return <span className="tokenError">Preencha os dados de Balance!</span>;
  };
  const tokenErro = () => {
    return <span className="tokenError">Preencha os dados de Token!</span>;
  };

  const tokenExists = () => {
    return <span className="tokenError">Token já existe!</span>;
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
          data-testid="btn-back"
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
          {tokenError && tokenErro()}
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
        {balanceErro && balanceError()}
        {tokenExist && tokenExists()}
        <div className="btn-save">
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
