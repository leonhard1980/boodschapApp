import React from "react";
import './Profile.css';
import vrouwtje from '../../assets/vrouwtje.jpg';
import mannetje from '../../assets/mannetje.jpg';

function Profile({rol, naam, sex, address, housenumber, zipcode, city}){
    return(
        <article className="opmaak">
            <div className="profiel-veld">
                <h2 className="kopje"> Welkom terug: {rol} </h2>
               <p className="adminopmaak">
                <div className="gegevens">
                    <img src={mannetje} />
                    <div className="puntjesopdei">Naam: {naam}</div>
                    <div className="puntjesopdei">Geslacht: {sex}</div>
                    <div className="puntjesopdei">Adres: {address}</div>
                    <div className="puntjesopdei">Huisnummer: {housenumber}</div>
                    <div className="puntjesopdei">Postcode: {zipcode}</div>
                    <div className="puntjesopdei">Woonplaats: {city}</div>
                </div>
               <article className="zoekopdrachtenAdmin">

                   <button className="knoppies"> 1. Klik voor het best verkopende product </button>
                   <button className="knoppies"> 2. Klik voor de meest bestellende klant </button>
                   <button className="knoppies"> 3. Klik voor inzicht in de aanbiedingen </button>
                   <button className="knoppies"> 4. Klik voor klant die het meeste geld uitgaf </button>
                   <button className="knoppies"> 5. Klik voor meest afgeprijsde product </button>
                   <button className="knoppies"> 6. Klik voor duurste product </button>
                   <button className="knoppies"> 7. Klik voor klant overzicht gebruikers </button>
                   <button className="knoppies"> 8. Klik voor meest kopende vrouw </button>
                   <button className="knoppies"> 9. Klik voor meest kopende man </button>
               </article>
            </p>
               <div className="uitslagen">Dit is het vak waar de uitslagen uit de database moeten komen te staan</div>
            </div>


        </article>

    );
}


export default Profile;