import React from "react";
import './Login.css';
import {useHistory} from "react-router-dom";

//deze Login, moet bij het inloggen als gebruiker, naar het gebruikersprofiel gaan.
// En als het een ADMIN is, moet ie naar het ADMIN-profiel (hoe doe je dat?)

function Login(){
let history = useHistory();

function handleClick(){
    history.push("/Profile")
}

    return(
    <form>
    <div className="login-veld">

        <label>
            <input className="login"
                type="text"
                placeholder="your emailaddress here"
            />
        </label>

        <label>
            <input className="login"
                type="text"
                placeholder="your password here"
            />
        </label>

        <label>
            <button
            type="submit" onClick={handleClick}>
                login
            </button>
        </label>

    </div>
    </form>
);
}

export default Login;