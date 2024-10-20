
import Footer from "../Footer/Footer";
import NavBar from "../Header/Navbar";
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div >
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;