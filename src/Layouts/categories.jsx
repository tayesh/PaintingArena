import { useLoaderData } from "react-router-dom";
import Card from "../Cards/Card";


const Categories = () => {
    const paintings =useLoaderData();
    console.log(paintings);
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    paintings.map(card => <Card key={card.id} card={card}></Card>)

                }
            </div>
            
        </div>
    );
};

export default Categories;