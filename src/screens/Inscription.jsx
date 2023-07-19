import React from "react";
import "../assets/css/Inscription.css"
import Form from "../components/Inscription/Forminsc"

export default function Inscription() {
    return (
        <div className="body">
            <div className="inscription">
                <h1>
                    <a href="/"><img src="/src/assets/SimplIEF.png" alt="" /></a>
                </h1>
                <Form />
            </div>
        </div>
    )
}
