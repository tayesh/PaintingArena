import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import PropTypes from 'prop-types';

const Review = ({ review }) => {
    const { name, rating, reviews , picture} = review;
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, 
    });
    if (inView && !isVisible) {
        setIsVisible(true);
    }

    return (
        <div ref={ref} className={`animate__animated ${isVisible ? 'animate__fadeInDown' : ''} animate__delay-1s animate__duration-2s text-white text-lg border-2 shadow-xl rounded-xl bg-gray-700 p-6`}>
            <img src={picture} alt="" className=" w-20 rounded-full my-4"/>
            <div className="space-y-3 ">
                <div className="flex gap-16">
                <h2 className="font-medium flex gap-2 items-center"><img src="https://i.ibb.co/TTbpFMx/complain.png" alt="" className="h-4 w-4" />{name}</h2>
                <p className="font-medium flex gap-2 items-center"><img src="https://i.ibb.co/v4K8tvS/star.png" alt="" className="h-4 w-4" />{rating}</p>
                </div>
                <p>{reviews}</p>
            </div>
        </div>
    );
};

Review.propTypes = {
    review: PropTypes.array,
}


export default Review;
