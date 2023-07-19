import React, { useState, useEffect } from "react";
import "./NavDash.css";
import Liste from "./Liste/Liste"

export default function NavDash() {
    return (
        <nav className="nav">
            <h1>
                <a href="/"><img src="/src/assets/SimplIEF.png" alt="SimplIEF" className="SimplIEF" /></a>
            </h1>
            <div className="navenf">
                <h2>Prisca Prevot</h2>
                <span>CE1</span>
            </div>
            <ul className="listnav">
                <li>
                    <h2>Années précendentes</h2>
                    <Liste />
                </li>
                <li>
                    <h2><a href="https://www.education.gouv.fr/programmes-scolaires-41483">Programme scolaire</a></h2>
                </li>
                <li>
                    <h2>Années à suivre</h2>
                    <Liste />
                </li>
                <li>
                    <h2 className="ressource"><a href="/Ressources">Ressources</a></h2>
                </li>
                <ul className="iconlist">
                    <li className="button">
                        <a href="" ><i className="fa-solid fa-print"></i></a>

                    </li>
                    <li className="button">
                        <a href="" ><i className="fa-regular fa-floppy-disk"></i></a>
                    </li>
                </ul>
            </ul>
        </nav>
    );
}
