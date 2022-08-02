import React from "react";
import TokenForm from "../../components/editToken";
import Header from "../../components/header";

import "./addToken.css";

export default function AddToken() {
  return (
    <div>
      <Header name="Voltar" className="button-back" />
      <TokenForm namePage="Add Token" classNameButton="button-remove" />
    </div>
  );
}
