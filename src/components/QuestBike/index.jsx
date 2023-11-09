import React from "react";
import "./QuestBike.css"

export default function QuestBike(props) {
  return (
    <>
      <section className="vistoria-confirm">
        <h1>Vamos iniciar a vistoria !</h1>
        <div className="vistoria-inicio">
          <h2>Você ja tem uma bicicleta cadastrada ?</h2>
          <div className="vistoria-btn-cadastro">
            <button onClick={() => props.setCadastro(true)}>Sim</button>
            <button onClick={() => props.setCadastro(false)}>Não</button>
          </div>
        </div>
      </section>
    </>
  );
}