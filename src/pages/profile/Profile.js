import React, {useState} from "react";
import './Profile.css';
import vrouwtje from '../../assets/vrouwtje.jpg';
import mannetje from '../../assets/mannetje.jpg';
import axios from "axios";

const apiKey = 'zelfbedachteApiKey';

function Profile({rol, naam, sex, address, housenumber, zipcode, city}){

    const[userData, setUserData] = useState({});

async function FetchData() {
    try{
        const result = await axios.get('https://localhost:8080/products');
        console.log(result.data);
        setUserData(result.data)
    } catch (e) {
        console.error(e);
    }
}


  return(
      <article className="opmaak">
{/*
          {Object.keys(data).length > 0 &&
*/}

              <div className="profiel-veld">
              <h2 className="kopje"> Welkom terug: {rol} </h2>
              <div className="gegevens">
        <img src={vrouwtje} />
          <div className="puntjesopdei">Naam: {naam}</div>
          <div className="puntjesopdei">Geslacht: {sex}</div>
          <div className="puntjesopdei">Adres: {address}</div>
          <div className="puntjesopdei">Huisnummer: {housenumber}</div>
          <div className="puntjesopdei">Postcode: {zipcode}</div>
          <div className="puntjesopdei">Woonplaats: {city}</div>
</div>
              <button>Klik om je orderhistory in te zien</button>
          </div>


      </article>


  );
}


export default Profile;