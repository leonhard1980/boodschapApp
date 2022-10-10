import React from "react";
import Bumper from "../components/bumper/Bumper";
import Login from "../components/login/Login";
import Profile from "../components/profile/Profile";
import ProfileAdmin from "../components/profile/ProfileAdmin";
import Counter from "../components/Counter";

function Home(){
    return(
        <>

           <Counter/>


            <Profile
            naam="Lonneke de Vries"
            sex="hermafrodiet"
            rol="Gebruiker"
            address="FriedlandLaan"
            housenumber="34"
            zipcode="3454EA"
            city="Beuningen"
            />

        <p>- Hier moeten de persoongegevens vanuit de database inlopen</p>
            <p>- Het fotootje moet veranderen per geslacht OF uit de database komen</p>
            <p>- De knop voor orderhistory moet alle aankopen ophalen uit database</p>


            <Login  />

<ProfileAdmin
    naam="Leonhard de Paepe"
    sex="man"
    rol="ADMIN"
    address="Laan van Kessels"
    housenumber="334"
    zipcode="3224EA"
    city="C-borg"/>


            <Bumper
                classname="bumper2"
            />
            <Bumper
                classname="bumper2"
            />
            <Bumper
                classname="bumper2"
            />

        </>


    );
}

export default Home;