import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../providers/AuthProviders";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css";

const Register = () => {

    useEffect(() => {
        Aos.init({ duration: 500 })
    }, [])

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        if (password.length < 6) {
            toast.error("Password should be at least 6 characters long.");
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase letter.");
            return;
        } else if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one lowercase letter.");
            return;
        }

        try {
            const result = await createUser(email, password);
            toast.success("Registration successful!");

            await updateUserProfile(result.user, { displayName: name, photoURL: photo });
            console.log("Profile updated successfully!");
        }
        catch (error) {
            console.error("Error during registration:", error);
            setRegisterError(error.message);
            toast.error(error.message);
        }
    };

    return (
        <div className="w-full bg-[rgb(120, 120, 120)] text-white py-12">
            <Helmet>
                <title>Registration Page</title>
            </Helmet>
            <ToastContainer />
            <div className="hero-content mx-auto">
                <div className="card shrink-0 bg-gray-700 w-full max-w-lg shadow-xl">
                    <h2 data-aos="flip-right" className="text-3xl text-center font-semibold mt-4">Register Now</h2>
                    <form onSubmit={handleRegister} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input data-aos="fade-right" type="text" name="name" placeholder="Your Name" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Photo URL</span>
                            </label>
                            <input data-aos="fade-left" type="text" name="photo" placeholder="Photo URL" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input data-aos="fade-right" type="email" name="email" placeholder="Your Email" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input
                                data-aos="fade-left"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered text-black" required />
                            <span className="absolute bottom-3 right-6" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash className="w-8" ></FaEyeSlash> : <FaEye data-aos="fade-left" className="w-8"></FaEye>
                                }
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <button data-aos="fade-up" className="btn bg-[rgba(250,250,250,0.5)] px-6">Register</button>
                        </div>
                    </form>
                    <p className="text-xl font-semibold text-center mb-6">Already Have an Account? <Link to="/login" className="text-red-500">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
