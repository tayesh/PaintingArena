import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getCartEstates } from "../utility/localStorage";
import CartDetail from "./CartDetail";
import { Helmet } from "react-helmet-async";

const Cart = () => {
    const cards = useLoaderData();
    console.log(cards);
    const [list, setList] = useState([]);

    useEffect(() => {
        const cartEstateId = getCartEstates();

        const filteredCards = cards.filter(card => cartEstateId.includes(card.id));

        setList(filteredCards);
    }, [cards])

    return (
        <div>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <h2 className='text-5xl font-bold text-center my-8'>My Cart</h2>
            <p className="text-lg text-white text-center">Explore Your Dream Space: Residential Real Estate Cart</p>
            <div>
                {list.map(card => <CartDetail key={card.id} card={card} />)}
            </div>
        </div>
    );
};

export default Cart;