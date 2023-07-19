import React, { useState, useEffect } from "react";
import "../assets/css/Famille.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { connectToken } from "../utils/connectToken";

export default function Famille() {
    const [utilisateurs, setUtilisateurs] = useState({});
    const [childs, setChilds] = useState([]);
    const config = connectToken();
    
    useEffect(() => {
        axios
            .get(
                `https://projetproback.projets.lecoledunumerique.fr/apip/user_connect`,
                config
            )
            .then((response) => {
                console.log(response);
                setUtilisateurs({
                    name: response.data.name,
                    email: response.data.email,
                });
                const childs = response.data.child
                setChilds(childs);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="body">
            <div className="famille">
                <div>
                    <h1>
                        <Link to="/">
                            <img className="img" src="/src/assets/SimplIEF.png" alt="" />
                        </Link>
                    </h1>
                </div>
                <h2>Bonjour, famille {utilisateurs.name}</h2>
                <div className="posenfant" key={childs}>
                    {childs ? (
                        childs.map(
                            (child) => (
                                <Link to="/Dashboard" className="enfant" key={child.name}>
                                    <p >{child.name}</p>
                                </Link>
                            )
                        )
                    ) : (
                        <p>Aucun enfant pour le moment</p>
                    )}
                    <div className="btnfam">
                        <Link to="/Enfant">
                            <button className="btnfamille">Ajouter un enfant</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
