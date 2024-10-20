import { FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() => {
        Aos.init({duration : 2000})
    }, [])

    return (
        <footer className="footer p-10 bg-lime-100 text-base-content">
            <aside className="pl-16 md:pl-12 space-y-2 text-lg">
                <p className="text-3xl font-semibold" data-aos="zoom-in-down">Painting Arena</p>
                <p className="flex items-center gap-2" data-aos="fade-right"
                ><FaPhone />+880 1783 87763</p>
                <p className="flex items-center gap-2" data-aos="fade-right"><MdEmail />PArena444@gmail.com</p>
                <p className="flex gap-2" data-aos="fade-right"><FaMapLocation />123 Gulshan Avenue , Badda , <br />Dhaka-1213 , Bangladesh</p>
            </aside>
            <nav className="mx-28 md:mx-0">
                <h6 className="footer-title text-black text-center text-xl" data-aos="flip-left">Services</h6>
                <a className="link link-hover " data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="100">Branding</a>
                <a className="link link-hover" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="200">Design</a>
                <a className="link link-hover" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="300">Marketing</a>
                <a className="link link-hover" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="400">Advertisement</a>
            </nav>
            <nav className="mx-28 md:mx-0">
                <h6 className="footer-title text-black text-center text-xl" data-aos="flip-left">Legal</h6>
                <a className="link link-hover" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="100">Terms of use</a>
                <a className="link link-hover" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="200">Privacy policy</a>
                <a className="link link-hover" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="300">Cookie policy</a>
            </nav>
            <nav className="mx-16 md:mx-0">
                <h2 className="footer-title pt-8 text-center text-xl text-black border-b-2 border-gray-500 w-full pb-4">Social</h2>

                <div className="grid grid-flow-col gap-2 md:gap-12">
                    <a><img src="https://i.ibb.co/GTL1Rfz/twitter-1.png" alt="" className="h-8 w-8" /></a>
                    <a><img src="https://i.ibb.co/0CtCj1J/instagram-2.png" alt="" className="h-8 w-8" /></a>
                    <a><img src="https://i.ibb.co/FgRrvwR/communication.png" alt="" className="h-8 w-8" /></a>
                    <a><img src="https://i.ibb.co/3TP1by1/linkedin.png" alt="" className="h-8 w-8" /></a>
                    <a><img src="https://i.ibb.co/WyhFTkk/github.png" alt="" className="h-8 w-8" /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;