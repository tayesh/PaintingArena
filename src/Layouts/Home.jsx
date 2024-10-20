import { Helmet } from "react-helmet-async";
import Cards from "../Cards/Cards";
import Reviews from "./Reviews";
import BannerSlider from "../Header/BannerSlider";
import Category from "./Category";
import FAQ from "./FAQ";

const Home = () => {

    
    // const hle =()=>{
    //     const item= {
    //     image: "https://example.com/mountain_view_canvas.jpg",
    //     item_name: "Mountain View Canvas",
    //     subcategory_name: "Landscape Painting",
    //     short_description: "Capture the serene beauty of mountain landscapes with this stunning canvas painting.",
    //     price: 99.99,
    //     rating: 4.5,
    //     customization: "yes",
    //     processing_time: "3-5 business days",
    //     stock_status: "In stock",
    //     user_email: "user1@example.com",
    //     user_name: "John Doe",
    //     add_button: true
    // };

    

    // }

    // const item= {
    //     image: "https://example.com/mountain_view_canvas.jpg",
    //     item_name: "Mountain View Canvas",
    //     subcategory_name: "Landscape Painting",
    //     short_description: "Capture the serene beauty of mountain landscapes with this stunning canvas painting.",
    //     price: 99.99,
    //     rating: 4.5,
    //     customization: "yes",
    //     processing_time: "3-5 business days",
    //     stock_status: "In stock",
    //     user_email: "user1@example.com",
    //     user_name: "John Doe",
    //     add_button: true
    // };

    // fetch("http://localhost:5000/paintings",{
    //     method:'POST',
    //     headers:{
    //         "content-type":"application/jason"
    //     },
    //     body:JSON.stringify(item)
    // })
    // .then(res=>res.json())
    // .then(data=>console.log(data))

    return (
        <div>
            <Helmet>
                <title>Painting Arena</title>
            </Helmet>
            <BannerSlider></BannerSlider>
            <Cards></Cards>
            <Category></Category>
            <FAQ></FAQ>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;