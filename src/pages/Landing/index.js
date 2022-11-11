import React from "react";
import { Button } from "../../components/Button";
import logo from "../../assets/Logo.png";
import style from "./Landing.module.css";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    let navigate = useNavigate()
  return (
    <section className={style.landing}>
      <Header />
      <img src={logo} alt="hive-5" />
      <Button onAction={navigate("/firstpage")}/>
    </section>
  );
};

export { LandingPage };
