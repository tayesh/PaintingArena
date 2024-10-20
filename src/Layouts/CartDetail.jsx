import PropTypes from 'prop-types';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CartDetail = ({ card }) => {
    console.log(card);
    return (
        <div className='my-12 md:mx-8'>
            <div className="hero h-auto bg-gray-700 text-white shadow-2xl text-lg rounded-xl">
                <div className="hero-content flex-col md:flex-row md:gap-12">
                    <img src={card.image} className="md:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{card.estate_title}</h1>
                        <p className="py-6">{card.description}</p>
                        <div className='flex gap-4 md:gap-20'>
                            <p><span className='font-medium'>Status : </span>{card.status}</p>
                            <p><span className='font-medium'>Price : </span>{card.price}</p>
                        </div>
                        <div className="flex gap-4 md:gap-20 mt-4">
                            <p><span className="font-medium">Area : </span>{card.area}</p>
                            <p className="flex items-center gap-2"><FaLocationDot /> {card.location}</p>
                        </div>
                        <Link to={`/cards/${card.id}`}>
                            <div className="card-actions justify-start mt-4">
                                <button className="btn px-8 sm:w-full md:w-3/4 bg-[rgb(120, 120, 120)] text-lg font-medium">View Details</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

CartDetail.propTypes = {
    card: PropTypes.array,
}

export default CartDetail;