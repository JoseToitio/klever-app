import React from "react";
import TokenForm from "../../components/editToken";
import "./addToken.css";

export default function AddToken() {
  return (
    <div>
      <TokenForm namePage="Add Token" classNameButton="button-remove"/>
    </div>
  );
}
