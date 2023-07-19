import React, { useState, useEffect } from "react";
import "../assets/css/Connection.css"
import Form from "../components/Connection/Formconn";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


export default function Connexion() {
    
    return (
        <div className="body">
            <div className="connect">
                <h1>
                    <a href="/"><img src="/src/assets/SimplIEF.png" alt="" /></a>
                </h1>
                <Form />
            </div>
        </div>

    )
}