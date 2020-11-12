import React from 'react';
import { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((auth) => { 

            if (auth) { 
                history.push('/');
            }

        })
        .catch(error => alert(error.message))
    } 

    const register = e => { 
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => { 
                alert("You have registered successfully");

                if (auth) { 
                    history.push('/');
                }
        })
        .catch(error => alert(error.message))
    }
    

    return (
        <div className="login">

            <Link to="/">
            <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt=""/>
            </Link>

            <div className="login_container">
                <h1>Sign-In</h1>

                <form>

                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login_signinBtn">Sign in</button>

                </form>

                <p>
                    By signing-in, you agree to Amazon Clone's Conditions Of Use & Sale. Please see our Privacy Notice and Our Interest-Based Ads Notice
                </p>

                <button type="submit" onClick={register} className="login_registerBtn">Create your Amazon account</button>

            </div>
        </div>
    )
}

export default Login;
