import { Helmet } from "react-helmet-async";
import "aos/dist/aos.css";
import { useLoaderData } from "react-router-dom";
import Card from "../Cards/Card";

const About = () => {

    const paintings=useLoaderData();
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    paintings.map(card => <Card key={card.id} card={card}></Card>)

                }
            </div>

            
        </div>
    );
};

export default About;