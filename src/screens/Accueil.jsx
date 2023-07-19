import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../assets/css/Accueil.css";
import ImageCarousel from "../components/Carroussel/Carroussel";
import Footer from "../components/Footer/Footer";

const Accueil = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages = await Promise.all([
                import("../assets/ecolemaison1.jpeg"),
                import("../assets/ecolemaison2.jpeg"),
                import("../assets/ecolemaison3.jpeg"),
                import("../assets/ecolemaison4.jpeg"),
            ]);

            setImages(loadedImages.map((image) => image.default));
        };

        loadImages();
    }, []);

    return (
        <div className="body">
            <Navbar />
            <ImageCarousel images={images} />
            <div className="presentation" id="presentation">
                <h2>
                    Présentation
                </h2>
                <div className="parapres">
                    <div className="imgpres"><img src="/src/assets/SimplIEF.png" alt="" /></div>

                    <p className="para">Simpl’IEF est un site permettant de créer les plannings scolaires en fonction du niveau de l’enfant,
                        et du programme scolaire (fournis et mis à jour). Les plannings sont imprimables et insérable dans
                        le dossier à fournir à l’inspection académique.  Il a été conçu dans l’idée d’aider les parents,
                        souhaitant faire l’école à la maison, en leur faisant gagner du temps, programme scolaire fourni pour
                        chaque niveau, et en leur permettant de construire une partie du dossier solide. </p>
                </div>
            </div>
            <div className="projet" id="projet">
                <h2>Pourquoi ce projet</h2>
                <p>Ce projet a été créer car souhaitant moi-même faire l’école à la maison pour ma fille, et voyant les règles de plus en plus stric, j’avais besoin d’apporter ma pierre à l’édiffice. Le dossier à construire est de plus en plus gros, et de plus en plus complexe. Ce site est destiné à diminuer le temps et la complexité de l’organisation des plannings. Il est destiné à évoluer en fonction des besoins des familles.
                    C’est avec un grand plaisir que je lirais vos retours positifs comme négatifs, qui permettent l’amélioration du site. Ainsi que vos envies, vos besoins, et vos idées sont aussi le bien venu.
                    C’est un site fait pour vous qui doit vous représenter, vous aider, vous soutenir dans ce projet d’IEF, et dans lequel vous retrouverez tout ce dont vous avez besoin, et envie.</p>
            </div>
            <div className="presentation" id="presentation">
                <h2>
                    Pourquoi SIMPL'IEF
                </h2>
                <div className="parapres">
                    <div className="imgpres"><img src="/src/assets/SimplIEF.png" alt="" /></div>

                    <p className="para">Pourquoi Simpl’IEF ?  Tout simplement parce que ce site est là pour simplifier la conception du dossier pour l’IEF (Instruction En Famille). Vous y retrouverez les programmes scolaires, ainsi que les plannings passés et futurs, et des ressources comme des blogs, des groupes facebook, des associations défendant l’Instruction En Famille,...  </p>
                </div>
            </div>
            <Footer />
        </div>

    )
}
export default Accueil;