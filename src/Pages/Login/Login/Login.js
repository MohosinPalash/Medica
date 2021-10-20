import React, { useState } from 'react';
import useAuth from '../../../contexts/useAuth';
import lock from '../../../images/loginIcons/lock-small.png'
import user from '../../../images/loginIcons/user-small.png'
import { useLocation, useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import './Login.css'
const Login = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    // console.log('Came from', location.state?.from);
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_url);
            })
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

    const handleName = e => {
        setName(e.target.value);
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }


    const handleRegistration = e => {
        console.log("clicked");
        e.preventDefault();
        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }

        isLogin ? userLogin(email, password) : createNewAccount(email, password)

        document.getElementById("email").value = "";
        document.getElementById("password").value = "";

    }
    const userLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setMsg('Login Successful!');
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const createNewAccount = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password,)
            .then(result => {
                const user = result.user;
                console.log(user);
                setMsg('Verification email is sent!');
                setError('');
                verifyEmail();
                updateUserInformation();
            }).catch(error => {
                setError(error.message);
            })

    }

    const updateUserInformation = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(result => { })
            .catch(error => {
                setError(error.message);
            })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })

    }



    return (
        <div>
            <section style={{ marginTop: "-80px" }}>
                <div className="box">
                    <div className="form">
                        <h1 style={{ color: "white", marginBottom: "20px" }}>{isLogin ? "Login" : "Register"}</h1>
                        <form onSubmit={handleRegistration}>

                            {!isLogin && <div className="inputBox">
                                <input onBlur={handleName} required type="text" name=" name" placeholder="Full Name" id="name" />
                                <img src={user} alt="" />
                            </div>}

                            <div className="inputBox">
                                <input onBlur={handleEmail} required type="email" name="email" placeholder="Email Address" id="email" />
                                <img src={user} alt="" />
                            </div>

                            <div className="inputBox">
                                <input onBlur={handlePassword} required type="password" name="password" placeholder="Password" id="password" />
                                <img src={lock} alt="" />
                            </div>

                            <div className="">
                                <input onChange={toggleLogin} type="checkbox" name="checkbox" id="" />
                                <label style={{ color: 'white', marginLeft: "5px" }} htmlFor="checkbox">Check for Login</label>
                            </div>

                            <div className="inputBox">
                                <small style={{ color: "white" }}>{error}</small>
                            </div>
                            <div className="inputBox">
                                <small style={{ color: "white" }}>{msg}</small>
                            </div>

                            <div className="inputBox">
                                <input type="submit" value={isLogin ? "Login" : "Register"} />
                            </div>

                        </form>
                        <button onClick={handleGoogleLogin} className="btn btn-warning"><strong>Sign in with Google</strong></button>

                    </div>

                </div >

            </section >
        </div >
    );
};

export default Login;