"use client"
import React, { useState } from "react";
import QuestBike from "../../components/QuestBike";
import CadastroBike from "../../components/CadastroBike";
import CamVistoria from "../../components/CamVistoria";


export default function Vistoria() {

  const [cadastro, setCadastro] = useState(null)

  return (
    <>
      {cadastro == null && <QuestBike setCadastro={setCadastro}/>}
      {cadastro == false && <CadastroBike setCadastro={setCadastro}/>}
      {cadastro == true && <CamVistoria/>}
    </>
  );
}