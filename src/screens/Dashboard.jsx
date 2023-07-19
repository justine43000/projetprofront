import React from "react";
import "../assets/css/Dashboard.css"
import NavDash from "../components/NavDash/NavDash";
import Calendrier from "../components/Calendrier/Calendrier";



export default function Dashboard() {
    return (
        <div className="body">
            <NavDash />
            <h3>Année 20.../20...</h3>
            <Calendrier />
        </div>
    )
}