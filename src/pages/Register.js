import { useForm } from 'react-hook-form';
import React from "react";
import PhotoSlider from "../components/photoslider/PhotoSlider";
import './Register.css';
import axios from 'axios';
import Bumper from "../components/bumper/Bumper";
import {Link, useHistory} from "react-router-dom";


// hier moet een POST request komen naar de database.
/*const result = await axios.post('https://link-naar-endpoint.nl', {
  age: "56",
city : "Culemborg",
email : "leonart@gmail.com",
housenumber : "21",
name : "Leonhard de Paepe",
newsletter : false,
sex : "man",
termsAndConditions : true,
zipcode : "4102GB",
}, {
    'Content-Type' : 'application/json'  //hier zeggen we Json te sturen, hier komt ook een authorisatie token.
});*/


function Register() {

    const [checktandc, toggleChecktandc] = React.useState(false);
    const { register, handleSubmit, formState: {errors}, watch} = useForm();
    const leguit = watch("sex");
    let history = useHistory();

    function onFormSubmit(data){
        console.log(data);
    }

    function handleClick(){
        history.push("./Profile");
    }

    return(
        <>
            <form className="container"
                onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset>
                    <p></p>
                    <legend>Schrijf je in voor de boodschapApp</legend>

                    Naam:
                    <input
                        className="textfield"
                        type="text"
                        placeholder="schrijf hier je naam"
                        {...register("name", {required: "Naam is verplicht", maxLength:  {value: 80, message: "Uw naam mag niet langer zijn dan 80 karakters", }})}
                    />
                    {errors.name && <p>{errors.name.message}</p>}

                    Leeftijd:
                    <input
                        className="textfield"
                        type="number"
                        {...register("age", {required: "Leeftijd mag niet leeg zijn", min: {value: 18, message: "U moet minimaal financieel aansprakelijk zijn", }}) }
                    />
                    {errors.age && <p>{errors.age.message}</p>}

                    Geslacht:
                    <select className="texfield"
                            {...register("sex")}
                    >
                        <option> man </option>
                        <option>vrouw</option>
                        <option>hermafrodiet</option>
                        <option>playboy</option>
                        <option>dier</option>
                        <option>beyond sex</option>
                    </select>

                    {leguit === "dier" &&
                    <input
                    type="text"
                    {...register("geslacht-dier")}
                        placeholder="Dit moet je uitleggen, hier begrijpen wij echt niks van."
                    />}

                    email:
                    <input
                        className="textfield"
                        type="email"
                        placeholder="schrijf hier je email"
                        {...register("email", {required: "email is verplicht"})}
                        //het email-type, check automatisch al op @, dus hier heb ik geen extra validatie ingebouwd.
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    Postcode:
                    <input
                        className="textfield"
                        placeholder="bijvoorbeeld: 1234AB"
                        type="text"
                        {...register("zipcode", {required: "postcode is verplicht, anders kunnen we u niets toesturen."})}

                    />
                    {errors.zipcode && <p>{errors.zipcode.message}</p>}
                    Huisnummer:
                    <input
                        className="number"
                        placeholder="bijvoorbeeld: 12"
                        type="number"
                        {...register("housenumber", {required: "huisnummer is verplicht, anders kunnen we u niets toesturen."})}

                    />
                    {errors.zipcode && <p>{errors.zipcode.message}</p>}
                    Woonplaats:
                    <input
                        className="textfield"
                        placeholder="Disneytown"
                        type="text"
                        {...register("city")}

                    />

                    <p className="checkboxcss">
                    <input
                       type="checkbox"
                        {...register("newsletter")}
                    />Ik schrijf me in voor de nieuwsbrief
                    </p>





                </fieldset>

                <p className="checkboxcss">
                    <input
                        type="checkbox"

                        {...register("termsAndConditions")}
                        checked={checktandc}
                        onChange={() => toggleChecktandc(!checktandc)}
                    />
                    Ik ben akkoord met de algemene voorwaarden
                    </p>
                <button
                    disabled={!checktandc}
                    type="submit"
                    onClick={handleClick}
                >
                    Schrijf mij in!
                </button>



            </form>

            <Bumper
                classname="bumper3"
            />

            <article>
                <Link to="/"> Terug naar Home></Link>
            </article>

            <PhotoSlider
                classnaampje="topplaatje6"
                quote="You only live ones (and zero's)"
                greatmind="Albert Einstein"
            />




            </>
    );
}

export default Register;



