import { Helmet } from "react-helmet-async";

import { IoIosBrush } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link, useLoaderData
 } from "react-router-dom";
 import Typewriter from 'typewriter-effect/dist/core';

const CardDetails = () => {

    const card = useLoaderData();
    

    console.log(card);

    return (
        <div className="bg-fixed bg-cover backdrop-blur-2xl"  style={{ backgroundImage: `url("${card.image}")` }}>
            <Helmet>
                <title>View Details</title>
            </Helmet>
            <div className="hero bg-fixed ">
                <div className="hero-content flex-col md:flex-row md:gap-8 md:mx-12">
                    <img src={card.image} className="md:w-[600px]  w-full rounded-lg shadow-2xl " />
                    <div className="text-xl md:h-[600px] md:mx-8 space-y-3 bg-[rgba(255,255,255,0.6)] backdrop-blur  rounded-xl py-12 px-12">
                        <h1 className="text-3xl font-bold">
                            
                           <h2>{card.item_name}</h2>
                        </h1>
                        <h2 className="text-2xl mt-4"><span className="font-semibold">Sub Category :</span> {card.subcategory_name}</h2>
                        <p className="py-4 text-lg">{card.short_description}</p>
                        <hr />
                        <div className="flex md:justify-between">
                            <p><span className="font-medium">Customization : </span>{card.customization}</p>
                            <p><span className="text-lg font-semibold">Rating : </span>{card.rating}</p>
                        </div>

                        <p><span className="font-medium">Status : </span>{card.stock_status}</p>
                        <p><span className="text-lg font-semibold">Processing Time : </span>{card.processing_time}</p>

                        <p><span className="text-lg font-semibold">Price : </span>{card.price}$</p>

                        <div className="md:flex text-lg items-center md:justify-between">
                            <p className="flex gap-1 items-center"><IoIosBrush />{card.user_name?card.user_name:"Anonymous"}</p>
                            <a className="flex gap-1 items-center"><MdEmail />{card.user_email}</a>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <div className="flex justify-center my-8">
                    <button className="btn bg-sky-200 px-6 font-medium text-lg">Go to HomePage</button>
                </div>
            </Link>
        </div>

    );
};

export default CardDetails;
