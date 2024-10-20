import { Helmet } from "react-helmet-async";
import { useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { useContext, useState } from "react";
import Card from "../Cards/Card";
import { ToastContainer, toast } from "react-toastify";


const Contact = () => {

    const paintings = useLoaderData();
    const { user } = useContext(AuthContext);
    // const filteredItems = paintings.filter(item => item.user_email === user.email);
    const [filteredItems,setFilteredItems]=useState(paintings.filter(item => item.user_email === user.email));
    
    
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/paintings/${id}`,
            {
                method:'DELETE',
            }
        )
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                if(data.deletedCount>0){
                    toast.success("Successfully Deleted")
                }
                setFilteredItems(filteredItems.filter(item=>item._id!==id));
            }
        })

    }

    return (
        <div data-aos="fade-down-right" className="text-white">
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    filteredItems.length>0
                    ?
                    filteredItems.map(card => <Card key={card.id} card={card} handleDelete={handleDelete}  ></Card>)
                    :
                    <h2 className="my-[20%] text-4xl text-center col-span-3">You have added no image</h2>

                }
            </div>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Contact;