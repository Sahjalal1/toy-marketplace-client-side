import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {

    const handleSignUp = event =>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-[50%] flex-col lg:flex-row">
                {/* <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div> */}
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input w-full  input-info max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input w-full  input-info max-w-xs" />
                        </div>
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
                            <input type="password" placeholder="Password" name="password" className="input w-full  input-info max-w-xs" />
                        </div>
                        <button className="btn btn-block btn-outline btn-error mt-4">SIGN IP</button>
                        <h1 className="text-center mt-4">-----OR SIGN UP WITH-----</h1>
                        <div className="text-center">
                            <button className="btn btn-outline btn-error"><FaGoogle /></button>
                        </div>
                        <h1 className="text-center">Don`t have an account?<Link to='/login' className="link link-error">Log In</Link></h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;