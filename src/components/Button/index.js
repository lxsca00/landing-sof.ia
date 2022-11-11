import React from "react"
import next from "../../assets/Continuar.png"
import style from "./Button.module.css"

const Button = () => {
    return(
        <button>
            <img src={next} alt="continuar"/>
        </button>
    )
}

export {Button}