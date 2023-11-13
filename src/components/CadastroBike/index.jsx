import style from "./CadastroBike.module.css"
import { useState } from 'react';

export default function CadastroBike(props) {

    const [bike, setBike] = useState({
        "numSerie": "",
        "cor" : "",
        "modelo" : "",
        "valor" : ""
    })

    const handleChange = async (e)=>{
        const {name, value} = e.target;
    setBike({...bike,[name]:value});
    };

    const handleSubmit = async (e)=> {
        e.preventDefault()
        console.log(bike)

        try{
            const response = await fetch("http://localhost:3000/api/cadastro",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:  JSON.stringify(bike)
            })

            if(response.ok){
                const data = response.json()
                if(data.status){
                    alert("Cadastro feito com sucesso!")
                    
                    setTimeout(() => {
                        props.setCadastro(true)
                    }, 2500);
                }else{
                    alert("Erro ao efetuar cadastro!")
                }
                
            }
        } catch (error) {
            console.log(error)
        }

    }

  return (
        <form className={style.formCadastro} onSubmit={handleSubmit}>
            <fieldset>
                <legend>Insira os dados da bicicleta</legend>
                <div>
                    <label htmlFor="idNumSerie">Numero de serie</label>
                    <input type="text" name="numSerie" id="idNumSerie" placeholder="Digite o Numero de serie" value={bike.numSerie} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="idCor">Cor</label>
                    <input type="text" name="cor" id="idCor" placeholder="Digite a cor" value={bike.cor} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="idModelo">Modelo</label>
                    <input type="text" name="modelo" id="idModelo" placeholder="Digite o modelo" value={bike.modelo} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="">Valor</label>
                    <input type="text" name="valor" id="idValor" placeholder="Digite o valor" value={bike.valor} onChange={handleChange}/>
                </div>
                <button>Cadastrar</button>
            </fieldset>
        </form>
  )
}