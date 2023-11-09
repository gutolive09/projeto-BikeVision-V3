import React from 'react'
import "./CadastroBike.css"

export default function CadastroBike(props) {
  return (
    <>
        <form className='form-cadastro'>
            <fieldset>
                <legend>Insira os dados da bicicleta</legend>
                <div>
                    <label htmlFor="">Numero de serie</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Cor</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Modelo</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Valor</label>
                    <input type="text" />
                </div>
                <button onClick={() => props.setCadastro(true)}>Cadastrar</button>
            </fieldset>
        </form>
    </>
  )
}