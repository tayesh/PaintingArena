import { useEffect, useState } from "react";
import Review from "./Review";


const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("review.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [])

    return (
        <div className="my-16">
            <h2 className="text-4xl font-bold text-center my-8">Our Reviewers</h2>
            <p className="text-lg text-center mx-6 my-4">The estates on Luxury Reside reflect diverse experiences, ranging from seamless property searches to high praise for the quality and suitability of the accommodations. Customers consistently commend the website's user-friendly interface and highlighting their satisfaction with finding their ideal residences.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mx-12 my-8">
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;