"use client"
import style from "./page.module.css";
import Beneficios from "../components/Beneficios";
import Banner from "../components/Banner";
import { BsBicycle } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <section className="desc">
          <h2>A solução para o seu negocio de seguros</h2>
          <BsBicycle className="bike" />
          <hr />
          <p>
            Atualmente é necessario a presença de uma pessoa para realizar o
            processo de vistoria de bicicletas, o que deixa o processo custoso
            para a seguradora e inconveniente para o cliente. É por isso que a
            BikeVision surgiu, para automatizar o processo e aprimorar a
            experiência da seguradora e do cliente com uma solução totalente em
            web, sem necessidade de uso de API externa ou de BackEnd complexo,
            ornando o processo mais rapido e fornecendo feedback para o usuario
            em tempo real.
          </p>
        </section>
        <Beneficios />
        <section className="teste">
          <h3>Faça a sua vistoria!</h3>
          <Link to={"/vistoria"}>
            <button>Vistoria</button>
          </Link>
        </section>
        <section className="contato">
          <AiOutlineMail className="mail" />
          <div className="contato-texto">
            <h2>Ficou interessado ?</h2>
            <p>Entre em contato conosco !</p>
            <button>Contato</button>
          </div>
        </section>
      </main>
    </>
  );
}