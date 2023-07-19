import React, { useState, useEffect } from "react";
import "./Formconn.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Form() {
    const navigate = useNavigate();
    const [state, setState] = useState({
        username: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((props) => ({
            ...props,
            [name]: value,
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: "post",
            url: "https://projetproback.projets.lecoledunumerique.fr/api/login_check",
            data: {
                username: state.username,
                password: state.password,
            },
        })
            .then(function (response) {
                //console.log(response.data.token);
                localStorage.setItem("token", response.data.token);
                navigate(`/Famille`);
            })
            .catch(function (error) {
                //console.log(error);
                setErrorMessage("Identifiants incorrects. Veuillez réessayer.");
            });
    };


    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="conn">
                <label className="label"
                    htmlFor="email">
                    Adresse e-mail :
                </label>
                <input
                    value={state.username}
                    type="email"
                    name="username"
                    id="email"
                    onChange={handleInputChange}
                    required
                    className="input"
                />
            </div>
            <div className="conn">
                <label className="label"
                    htmlFor="password">
                    Mot de passe :
                </label>
                <input
                    value={state.password}
                    name="password"
                    type="password"
                    id="password"
                    onChange={handleInputChange}
                    required
                    className="input"
                />
            </div>

            <div className="mdpcon">
                <a href="/MdpOublie">Mot de passe oublié ?</a>
            </div>
            <div className="btnconn">
                <button className="btncon" type="submit">Se connecter</button>
            </div>
        </form>
    );
}
