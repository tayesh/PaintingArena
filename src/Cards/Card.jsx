import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Aos from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css";


const Card = ({ card, handleDelete, categorySec }) => {
    useEffect(() => {
        Aos.init({ duration: 200 })
    }, [])

    const nav = useNavigate();
    const navigate = sc => {
        nav(`/SubCategory/${sc.split(" ").join("_")}`)
    }

    const { _id, item_name, image, short_description, customization, stock_status, price,subcategory_name } = card;
    const location = useLocation()
    if (categorySec) return (
        <div onClick={()=>navigate(subcategory_name)} className="card card-compact bg-lime-50 text-black border-white border-2 shadow-xl" data-aos="fade-up">
            <figure><img src={image} alt="Shoes" className="md:h-[300px] w-full" data-aos="zoom-in-up" /></figure>
            <div className="card-body px-6 py-4 space-y-3">
                <h2 className="card-title text-xl font-bold">{item_name}</h2>

                <p className="text-lg"><span className="text-lg font-medium">Category : </span>{subcategory_name}</p>
                <p className="text-lg"><span className="text-lg font-medium">Stock Status : </span>{stock_status}</p>

            </div>

        </div>
    )
    else


    return (
        <div>
            <div className="card card-compact bg-gray-700 text-white border-white border-2 shadow-xl" data-aos="fade-up">
                <figure><img src={image} alt="Shoes" className="md:h-[300px] w-full" data-aos="zoom-in-up" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">{item_name}</h2>
                    <div className="">
                        <p className="text-lg"><span className="text-lg font-medium">short_description : </span>{short_description}</p>
                        <p className="text-lg"><span className="text-lg font-medium">customization : </span>{customization}</p>
                    </div>
                    <div className="space-y-2 mb-4">

                        <p className="text-lg"><span className="text-lg font-medium">Price: </span>{price}</p>
                        <p className="text-lg"><span className="text-lg font-medium">stock_status : </span>{stock_status}</p>
                    </div>
                    <div className="flex justify-between" data-aos="fade-up">

                        {
                            location.pathname === "/contact"
                                ?
                                <>
                                    <Link to={`/updateinfo/${card._id}`}>
                                        <div className="card-actions justify-end ">
                                            <button className="btn px-8 w-full bg-[rgba(250,250,250,0.5)] md:text-lg font-medium">Update</button>
                                        </div>
                                    </Link>
                                    <div className="card-actions justify-end ">
                                        <button onClick={() => handleDelete(card._id)} className="btn px-8 w-full bg-[rgba(255,80,80,0.88)] md:text-lg font-medium">Delete</button>
                                    </div>
                                </>
                                :
                                <>
                                    <Link to={`/cards/${card._id}`}>
                                        <div className="card-actions justify-end ">
                                            <button className="btn px-8 w-full bg-[rgba(250,250,250,0.5)] md:text-lg font-medium">View Details</button>
                                        </div>
                                    </Link>
                                </>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.array,
}

export default Card;