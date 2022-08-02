import React from 'react'
import TokenForm from '../../components/editToken'
import Header from '../../components/header'

export default function EditToken() {
  return (
    <div>
      <Header name="Voltar" className="button-back"/>
      <TokenForm namePage="Edit Token" />
    </div>
  )
}