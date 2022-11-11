import React from "react";
import { Button } from "../../components/Button";
import logo from "../../assets/Logo.png";
import style from "./Landing.module.css";
import { Header } from "../../components/Header";
import { redirect } from "react-router-dom";


const LandingPage = () => {
    
  return (
    <section className={style.landing}>
      <Header />
      <img src={logo} alt="hive-5" />
      <Button onClick={redirect("firstpage")}/>
    </section>
  );
};

export { LandingPage };
