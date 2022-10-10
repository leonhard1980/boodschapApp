import {link} from 'react-router-dom';
import React from "react";
import PhotoSlider from "../../components/photoslider/PhotoSlider";
import './GetInvolved.css';
import Bumper from "../../components/bumper/Bumper";

function GetInvolved() {
    return(
        <>
            <Bumper tekst="." />
            <h2> Get Involved</h2>


<button>
    <h1>Klik hier voor alle aanbiedingen</h1>
</button>
            <article className="page-container">
                <p className="colums-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis cumque exercitationem minus optio, perferendis quos sunt.
                    Accusamus ad aliquid autem consequatur, eos ex excepturi illum impedit maiores molestias nam quod rem, voluptatibus. Mollitia, quidem voluptas?
                    Consectetur dolorem dolorum exercitationem iure magni molestias quaerat quas reprehenderit sit voluptates? Adipisci eius eveniet quas ullam!
                    Atque autem deserunt esse et fuga laudantium <b>nostrum omnis</b> repudiandae voluptates voluptatibus. At, corporis cupiditate dolor eligendi eos
                    exercitationem harum impedit maxime molestias neque perferendis praesentium, provident reprehenderit sapiente sequi voluptates voluptatum?
                    Debitis odio perferendis repellendusidem quis quisquam tempore ut veritatis vitae. At autem blanditiis cum, dignissimos dolore
                    facere illo quis ullam vero. Cum deleniti dolorum earum et, explicabo facilis hic illo minima nisi obcaecati odio omnis porro rerum vel velit.
                    Autem cum delectus deserunt exercitationem, fugiat illum iste iusto natus nobis nostrum perferendis provident qui quos recusandae sapiente tempora
                    tempore unde, voluptas. Ab, deserunt est fugiat fugit ipsam saepe sint ullam?
                </p> </article>
            <Bumper
                classname="bumper3"
               />

            <PhotoSlider
                classnaampje="topplaatje"
                quote="Neem je bammetjes mee schat!"
                greatmind="Albert Einsteins vrouw"
            />
 </>
    );
}

export default GetInvolved;