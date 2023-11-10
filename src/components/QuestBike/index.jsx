import React from "react";
import style from "./QuestBike.css"

export default function QuestBike(props) {
  return (
    
      <section className={style.vistoriaConfirm}>
        <h1>Vamos iniciar a vistoria !</h1>
        <div className={style.vistoriaInicio}>
          <h2>Você ja tem uma bicicleta cadastrada ?</h2>
          <div className={style.vistoriaBtnCadastro}>
            <button onClick={() => props.setCadastro(true)}>Sim</button>
            <button onClick={() => props.setCadastro(false)}>Não</button>
          </div>
        </div>
      </section>

  );
}