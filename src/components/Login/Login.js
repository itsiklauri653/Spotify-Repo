import React from 'react'
import "./Login.css"
import spotifyLogo from "../../images/spotify2019-830x350.jpg"
import { loginUrl } from '../../DataLayer/spotify'
function Login(){
    return(
        <div className="login">
            <img
                src={spotifyLogo}
                alt=""
            />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;