import React from "react";
import style from "./PageName.module.css";

function PageName({ text }) {
  return (
    <>
      <p className={style.page}>page</p>
      <h1 className={style.letter}>{text}</h1>
    </>
  );
}

export { PageName };
