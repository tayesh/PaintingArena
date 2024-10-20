import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link , useLocation , useNavigate} from "react-router-dom";
import auth from "../firease/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css";

const LogIn = () => {

    useEffect(() => {
        Aos.init({duration : 500})
    },[])

    const location = useLocation();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const { signIn } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                console.log(loggedInUser);
                toast.success("Login successful!");
                navigate(location?.state? location.state : "/")

            })
            .catch(error => {
                console.error(error.message);
                toast.error(error.message);
            })
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                setUser(loggedUser);
                toast.success("Login successful!");
                navigate(location?.state? location.state : "/")
            })
            .catch(error => {
                console.error(error.message);
                toast.error(error.message);
            })
    }

    const handleLogIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log("Email:", email, "Password:", password);

        signInWithEmailAndPassword(auth , email, password)
            .then(result => {
                const loggedmailUser = result.user;
                console.log(loggedmailUser);
                setUser(loggedmailUser);
                toast.success("Login successful!");
                navigate(location?.state? location.state : "/")
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message);
            })
    }
    return (
        <div className="w-full py-12 bg-[rgb(120, 120, 120)] text-white">
            <Helmet>
                <title>Log In Page</title>
            </Helmet>
            <ToastContainer />
            <div className="hero-content mx-auto">
                <div className="card shrink-0 w-full max-w-lg shadow-xl bg-gray-700">
                    <h2 data-aos="flip-left" className="text-3xl text-center font-semibold mt-4 pt-6">Log in to your account</h2>
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input data-aos="fade-right" type="email" name="email" placeholder="Your Email" className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input data-aos="fade-left" type="password" name="password" placeholder="Password" className="input input-bordered text-black" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                            </label>
                        </div>
                        
                        <div data-aos="fade-up" className="form-control mt-6">
                            <button className="btn bg-[rgba(250,250,250,0.5)] text-lg font-medium">Log In</button>
                        </div>
                    </form>
                  
                    <div className="flex justify-center gap-1">
                    <p>--------------------------</p>
                    <h2 className="text-xl font-medium text-center mb-3"> Continue With </h2>
                    <p>--------------------------</p>
                    </div>
                  
                    <div className="mb-6 flex justify-center items-center gap-12">
                            <button data-aos="fade-right" onClick={handleGoogleLogin} className="btn h-16 px-6 py-1 md:ml-8 text-lg font-medium"><img src="https://i.ibb.co/TbnztzB/google-symbol.png" alt="" className="h-10 w-10"/> </button>
                            <p className="text-2xl font-medium">Or</p>
                            <button data-aos="fade-left" onClick={handleGithubLogin} className="btn h-16  px-6 py-1 md:ml-0 text-lg bg-black font-medium"><img src="https://i.ibb.co/WyhFTkk/github.png" alt="" className="h-10 w-10"/></button>
                        </div>
                    <p className="text-xl font-semibold text-center mb-6">New Here ? <Link to="/register" className="text-red-500">Register Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;