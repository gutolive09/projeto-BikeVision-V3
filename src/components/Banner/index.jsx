import Carousel from "../Carousel";
import style from "./Banner.module.css"

export default function Banner() {
  return (
    
      <div className={style.banner}>
        <h1>Bem vindo ao futuro do seguro de bicicletas</h1>
        <Carousel/>
      </div>

  );
}