import React from 'react'
import "../assets/css/Ressources.css"
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'


export default function Ressources() {
    return (
        <div className='ressources'>
            <Navbar />
            <h2 className='titreressources'>Ressources</h2>
            <div className='divliste'>
                <h3 className='titreressource'>Associations</h3>
                <ul className='liressource'>
                    <li ><a href="https://www.pass-education.fr">Pass-Éducation</a></li>
                    <li><a href="https://www.lesenfantsdabord.org">Les Enfants d'Abord</a></li>
                    <li><a href="https://laia-asso.fr">LAIL (Libre d'Apprendre et d'Instruire Autrement)</a></li>
                    <li><a href="https://association-unie.fr">UNIE, l'Instruction, la clé de l'épanouissement</a></li>
                    <li><a href="https://www.helloasso.com/associations/association-parents-instructeurs-enfant-epanouis">Parents Instructeurs Enfants Epanouis (PIEE)</a></li>
                </ul>
            </div>
            <div>
                <h3 className='titreressource'>Groupes Facebook</h3>
                <ul className='liressource'>
                    <li><a href="https://www.facebook.com/EnfantsInstruitsParCorrespondance/?locale=fr_FR.pass-education.fr">Facebook Parents instructeurs enfants épanouis</a></li>
                    <li><a href="https://www.facebook.com/groups/436093376438144?locale=fr_FR">IEF (Groupe international francophone pour l'école à la maison)</a></li>
                    <li><a href="https://www.facebook.com/groups/531508646907748?locale=fr_FR">IEF Instruction En Famille</a></li>
                    <li><a href="https://www.facebook.com/groups/213840239365036?locale=fr_FR">Parents solos en IEF</a></li>
                    <li><a href="https://www.facebook.com/groups/1175098516415854?locale=fr_FR">Demandes d'autorisation IEF 2023 - Informations et entraide</a></li>
                    <li><a href="https://www.facebook.com/groups/321354304700640?locale=fr_FR">Ief auvergne</a></li>
                </ul>
            </div>
            <div>
                <h3 className='titreressource'>Loi</h3>
                <ul className='liressource'>
                    <li><a href="https://www.service-public.fr/particuliers/vosdroits/F23429">Service Public, Instruction dans la famille</a></li>
                    <li><a href="https://www.education.gouv.fr/l-instruction-dans-la-famille-340514">Ministère de l'Éducation, Instruction dans la famille</a></li>
                    <li><a href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043964862">Légifrance, LOI n° 2021-1109 du 24 août 2021 confortant le respect des principes de la République (1)</a></li>
                </ul>
            </div>
            <div>
                <h3 className='titreressource'>École à distance</h3>
                <ul className='liressource'>
                    <li><a href="https://www.cned.fr/primaire/classe-de-petite-section">Le CNED maternelle</a></li>
                    <li><a href="https://www.hattemer-academy.com/nos-cycles/maternelle">Hattemer Academy</a></li>
                    <li><a href="https://www.ecoleadistance.com">Educ'Etic</a></li>
                    <li><a href="https://www.eib-adistance.com">IEB à distance</a></li>
                </ul>
            </div>
            <div>
                <h3 className='titreressource'>Autres Ressources</h3>
                <ul className='liressource'>
                    <li><a href="https://socialcompare.com/fr/comparison/comparatif-des-cours-par-correspondance-cpc-du-primaire-au-lycee">Comparatif des CPC (Cours Par Correspondance )</a></li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}