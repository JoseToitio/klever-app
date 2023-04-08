import React from "react";
import TokenForm from "../../components/AddToken/index";
import Header from "../../components/header";

export default function AddToken() {
  return (
    <div>
      <Header name="Voltar" className="button-back" />
      <TokenForm namePage="Add Token" classNameButton="button-remove" />
      <p>a</p>
    </div>
  );
}
