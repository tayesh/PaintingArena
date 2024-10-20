
import Card from "./Card";
import { useLoaderData } from "react-router-dom";


const Cards = () => {

    // const [cards, setCards] = useState([]);
    const paintings = useLoaderData()

    // useEffect(() => {
    //     fetch("residential.json")
    //         .then(res => res.json())
    //         .then(data => setCards(data))
    // }, [])

    return (
        <div className="m-8">
           
            <div className="space-y-3 mb-8">
                <h2 className="md:text-5xl font-semibold text-center">Residential Estates</h2>
                <p className="text-lg text-white text-center">Explore our collection of luxurious residential estates offering unparalleled living experiences.From <br />elegant penthouses with breathtaking city views to serene countryside retreats, find your dream home here.</p>
            </div>
            {/* <h2>paintings : {paintings.length}</h2> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    paintings.slice(0, 6).map(card => <Card key={card.id} card={card}></Card>)

                }
            </div>
        </div>
    );
};

export default Cards;