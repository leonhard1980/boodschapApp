import React from "react";
import './Login.css';

//deze Login, moet bij het inloggen als gebruiker, naar het gebruikersprofiel gaan.
// En als het een ADMIN is, moet ie naar het ADMIN-profiel (hoe doe je dat?)

function Login(){


    return(
    <form>
    <div className="login-veld">

        <label>

            <input
                type="text"
                placeholder="your emailaddress here"

            />
        </label>

        <label>

            <input
                type="text"
                placeholder="your password here"
            />

        </label>

        <label>
            <button
            type="submit">
                login
            </button>

        </label>

    </div>
    </form>
);
}

export default Login;