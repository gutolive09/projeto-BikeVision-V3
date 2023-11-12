import React from "react";
import Webcam from "react-webcam";
import style from "./CamVistoria.module.css"

export default function CamVistoria() {
  return (
      <div className={style.containerWebcam}>
        <Webcam />
      </div>
  );
}