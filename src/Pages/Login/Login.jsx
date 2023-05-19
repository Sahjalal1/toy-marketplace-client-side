import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app)

const Login = () => {
    const { signIn } = useContext(AuthContext)

    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider()


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from)
            })
            .catch(error => console.log(error))

    }

    const handleLogin = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from)
                form.reset()


            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-[50%] flex-col lg:flex-row">
                {/* <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div> */}
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input w-full  input-info max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered input-error w-full max-w-xs" />
                        </div>
                        <input className="btn btn-block btn-outline btn-error mt-4" type="submit" value="LOG IN" />

                        <h1 className="text-center mt-4">-----OR LOGIN WITH-----</h1>
                        <div className="text-center">
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-error"><FaGoogle /></button>

                        </div>
                        <h1 className="text-center">Don`t have an account?<Link to='/signup' className="link link-error">Sign Up</Link></h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;