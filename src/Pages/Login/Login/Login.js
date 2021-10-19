import React from 'react';
import useAuth from '../../../contexts/useAuth';
import lock from '../../../images/loginIcons/lock-small.png'
import user from '../../../images/loginIcons/user-small.png'
import './Login.css'
const Login = () => {
    const { googleSignIn } = useAuth();
    return (
        <div>
            <section style={{ marginTop: "-80px" }}>
                <div className="box">
                    <div className="form">
                        <h1>Login</h1>
                        <form>
                            <div class="inputBox">
                                <input type="text" placeholder="Email Address" />
                                <img src={user} alt="" />
                            </div>

                            <div class="inputBox">
                                <input type="password" placeholder="Password" />
                                <img src={lock} alt="" />
                            </div>

                            <div class="inputBox">
                                <input type="submit" value="Login" />
                            </div>

                        </form>
                        <button onClick={googleSignIn} className="btn btn-warning">Sign in with Google</button>

                    </div>

                </div>

            </section>
        </div>
    );
};

export default Login;