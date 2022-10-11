import React from "react";
import Bumper from "../components/bumper/Bumper";
import Login from "../components/login/Login";
import ProfileAdmin from "./profile/ProfileAdmin";
import PhotoSlider from "../components/photoslider/PhotoSlider";
import './Home.css';


function Home(){
    return(
        <>
            <Bumper
                classname="bumper1"
            />
<p></p>

            <article>
<article className="containerlogin">
            <Login  />
</article>

    <p>- Hier moeten de persoongegevens vanuit de database inlopen</p>
    <p>- Het fotootje moet veranderen per geslacht OF uit de database komen</p>
    <p>- De knop voor orderhistory moet alle aankopen ophalen uit database</p>




    <Bumper
        classname="bumper3"
    />
    <PhotoSlider
        classnaampje="topplaatje10"
    />
    <Bumper
        classname="bumper3"
    />


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
</article>

        </>
    );
}

export default Home;


/*


<Profile
    naam="Lonneke de Vries"
    sex="hermafrodiet"
    rol="Gebruiker"
    address="FriedlandLaan"
    housenumber="34"
    zipcode="3454EA"
    city="Beuningen"
/>*/
