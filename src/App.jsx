import { Route, Routes } from "react-router-dom"
import Accueil from "./screens/Accueil"
import Connexion from "./screens/Connexion"
import Inscription from "./screens/Inscription"
import Famille from "./screens/Famille"
import Dashboard from "./screens/Dashboard"
import Donnees from "./screens/Donnees"
import Contact from "./screens/Contact"
import MdpOublie from "./screens/MdpOublie"
import NouveauMdp from "./screens/NouveauMdp"
import Enfant from "./screens/Enfant"
import Ressources from "./screens/Ressources"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Famille" element={<Famille />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Donnees" element={<Donnees />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/MdpOublie" element={<MdpOublie />} />
        <Route path="/NouveauMdp" element={<NouveauMdp />} />
        <Route path="/Enfant" element={<Enfant />} />
        <Route path="/Ressources" element={<Ressources />} />
      </Routes>
    </div>
  )
}