import React from 'react'
import TokenForm from '../../components/EditToken'
import Header from '../../components/header'

export default function EditToken() {
  return (
    <div>
      <Header name="Voltar" className="button-back"/>
      <TokenForm namePage="Edit Token" />
    </div>
  )
}