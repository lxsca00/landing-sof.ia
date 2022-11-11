import React from "react"
import next from "../../assets/Continuar.png"
import style from "./Button.module.css"

const Button = ({event}) => {
    return(
        <button onClick={event}>
            <img src={next} alt="continuar"/>
        </button>
    )
}

export {Button}