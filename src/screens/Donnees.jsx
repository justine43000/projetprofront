import React from 'react'
import "../assets/css/Donnees.css"
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function Donnees() {
    return (
        <div className='donnees'>
            <Navbar />
            <h2 className='titre'>Politique des données</h2>
            <h3 className='soustitre'>Collecte de données</h3>
            <p className='soustitrep'>Notre site web collecte les informations suivantes :</p>
            <ul className='soustitrep'>
                <li>Informations personnelles : nom, prénom, adresse e-mail, numéro de téléphone, etc. Ces informations sont collectées lorsque vous remplissez un formulaire de contact, vous vous abonnez à notre newsletter, vous effectuez un achat, ou vous nous contactez directement.</li>
                <li>Données de navigation : adresse IP, type de navigateur, système d'exploitation, pages visitées, horaires de visite, etc. Ces informations sont collectées automatiquement à des fins statistiques et d'analyse du comportement des utilisateurs sur notre site web à l'aide de cookies et d'autres technologies similaires.</li>
            </ul>
            <h3 className='soustitre'>Utilisation des données</h3>
            <p className='soustitrep'>Les données collectées sont utilisées pour les finalités suivantes :</p>
            <ul className='soustitrep'>
                <li>Fournir les services demandés : répondre à vos demandes d'information, de contact, de support ou de service client.</li>
                <li>Gérer les abonnements à la newsletter : vous envoyer des informations et des communications liées à nos produits, services, promotions ou événements, si vous avez expressément consenti à recevoir de telles communications.</li>
                <li>Améliorer notre site web : analyser les données de navigation pour comprendre comment les utilisateurs interagissent avec notre site web, améliorer son fonctionnement, sa sécurité, et son contenu.</li>
                <li>Respecter les obligations légales : se conformer aux lois et régulations en vigueur, répondre à une demande d'une autorité légale, ou protéger nos droits, notre propriété ou notre sécurité, ainsi que ceux de nos utilisateurs.</li>
            </ul>
            <h3 className='soustitre'>Partage des données</h3>
            <p className='soustitrep'>Vos données personnelles ne seront pas vendues, louées, ou partagées avec des tiers non affiliés, sauf dans les cas suivants :</p>
            <ul className='soustitrep'>
                <li>Partenaires de confiance : nous pouvons partager vos données avec des partenaires de confiance, tels que des prestataires de services tiers qui nous aident à exploiter notre site web, à fournir nos services, ou à gérer notre relation client. Ces partenaires sont tenus de protéger la confidentialité et la sécurité de vos données, et de les utiliser uniquement dans le cadre des finalités pour lesquelles elles ont été collectées.</li>
                <li>Conformité légale : nous pouvons divulguer vos données pour nous conformer à une obligation légale, une demande d'une autorité légale, ou pour protéger nos droits, notre propriété ou notre sécurité, ainsi que ceux de nos utilisateurs.</li>
            </ul>
            <h3 className='soustitre'>Sécurité des données</h3>
            <p className='soustitrep'>Nous prenons des mesures techniques et organisationnelles appropriées pour protéger la confidentialité, l'intégrité, et la sécurité de vos données, et pour prévenir tout accès non autorisé, toute divulgation, toute altération, ou toute destruction de vos données.</p>
            <h3 className='soustitre'>Durée de conservation des données</h3>
            <p className='soustitrep'>Nous conservons vos données aussi longtemps que nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, sauf si la loi l'exige autrement. Nous prenons également des mesures pour minimiser la quantité de données collectées et conservées, et pour supprimer les données obsolètes ou inutiles.</p>
            <h3 className='soustitre'>Vos droits</h3>
            <p className='soustitrep'>Vous avez le droit de :</p>
            <ul className='soustitrep'>
                <li>Accéder à vos données personnelles : vous pouvez demander à consulter, à corriger, à mettre à jour, ou à supprimer vos données personnelles détenues par notre site web.</li>
                <li>Retirer votre consentement : si vous avez donné votre consentement pour le traitement de vos données personnelles, vous pouvez le retirer à tout moment en nous contactant.</li>
                <li>Limiter le traitement de vos données : vous pouvez demander de limiter le traitement de vos données personnelles dans certaines circonstances, par exemple si vous contestez l'exactitude de vos données ou si vous estimez que leur traitement est illégal.</li>
                <li>Vous opposer au traitement de vos données : vous pouvez vous opposer au traitement de vos données personnelles pour des raisons légitimes liées à votre situation particulière.</li>
                <li>Portabilité des données : vous avez le droit de recevoir vos données personnelles dans un format structuré, couramment utilisé et lisible par machine, et de les transférer à un autre responsable de traitement.</li>
                <li>Déposer une plainte : vous avez le droit de déposer une plainte auprès d'une autorité de protection des données si vous estimez que le traitement de vos données personnelles viole les lois applicables en matière de protection des données.</li>
            </ul>
            <h3 className='soustitre'>Modifications de la politique de données</h3>
            <p className='soustitrep'>Nous nous réservons le droit de modifier cette politique de données à tout moment. Toute modification sera publiée sur notre site web avec indication de la date de mise à jour. Il est de votre responsabilité de consulter régulièrement cette politique de données pour rester informé des éventuelles modifications.</p>
            <h3 className='soustitre'>Contact</h3>
            <p className='soustitrep'>Si vous avez des questions, des préoccupations ou des demandes concernant cette politique de données ou le traitement de vos données personnelles, veuillez nous contacter à l'adresse [insérer l'adresse de contact].</p>
            <p className='soustitrep'>Date de mise à jour : [insérer la date de mise à jour la plus récente]</p>
            <p className='soustitrep'>Note : Veuillez noter que cette politique de données est un exemple générique et doit être adaptée en fonction des lois et des régulations applicables dans votre juridiction, ainsi que des pratiques spécifiques de votre site web. Il est recommandé de consulter un professionnel du droit ou de la protection des données pour obtenir des conseils juridiques spécifiques à votre situation.</p>
            <Footer />
        </div>
    )
}