import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Layouts/Home";
import Cart from "../Layouts/Cart";
import Register from "../Layouts/Register";
import LogIn from "../Layouts/LogIn";
import CardDetails from "../Cards/CardDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import About from "../Layouts/About";
import UpdateProfile from "../Layouts/UpdateProfile";
import Contact from "../Layouts/Contact";
import Categories from "../Layouts/categories";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:()=>fetch("http://localhost:5000/paintings"),
            },
            {
                path: "/allPaintings",
                element: <About></About>,
                loader:()=>fetch("http://localhost:5000/paintings"),
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/cards/:cardId",
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/paintings/${params.cardId}`),
            },
            {
                path: "/cart",
                element: <PrivateRoute><Cart></Cart></PrivateRoute>,
                loader: () => (fetch("residential.json"))
            },
            {
                path: "/update",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
            },
            {
                path: "/updateinfo/:id",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/paintings/${params.id}`),
            },
            {
                path: "/SubCategory/:sub",
                element: <PrivateRoute><Categories></Categories></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/subcategory/${params.sub}`),
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
                loader:()=>fetch("http://localhost:5000/paintings"),
            }
        ]
    }
])

export default router;