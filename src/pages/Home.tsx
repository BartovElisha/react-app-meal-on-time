import Card from "../components/Card";
import Footer from "../components/Footer";
import Title from "../components/Title";

function Home() {

    const data = [
        {
            id: 1,
            name: "Greek Salad", 
            price: 30.5,
            description: "Salad with olives",
            image_url: "https://cdn.pixabay.com/photo/2017/01/09/20/23/pasta-salad-1967501_1280.jpg",
            category: "Vegeterian",
            link: "https://www.edimdoma.ru/jivem_doma/posts/23010-sostavlyaem-legkoe-menyu-na-nedelyu",
            rating: 5
        },
        {
            id: 2,
            name: "Pad Thai", 
            price: 45,
            description: "Very good and tasty",
            image_url: "https://cdn.pixabay.com/photo/2017/02/25/15/23/pad-thai-2098017_1280.jpg",
            category: "Asian",
            link: "https://www.edimdoma.ru/retsepty/8643-pad-thai-tayskaya-lapsha",
            rating: 4 
        },
        {
            id: 3,
            name:"Fried Chieken", 
            price:98.6,
            description: "Fried chicken chips...",
            image_url: "https://cdn.pixabay.com/photo/2017/03/20/09/08/food-2158543_1280.jpg",
            category: "Meet",
            link: "https://www.edimdoma.ru/retsepty/40374-na-kurinyh-nozhkah-chicken-lollipops",
            rating: 5
        },
        {
            id: 4,
            name:"Fried Chieken", 
            price:98.6,
            description: "Fried chicken chips...",
            image_url: "https://cdn.pixabay.com/photo/2017/03/20/09/08/food-2158543_1280.jpg",
            category: "Meet",
            link: "https://www.edimdoma.ru/retsepty/40374-na-kurinyh-nozhkah-chicken-lollipops",
            rating: 5
        }
    ];

    return ( 
        <>
            <Title content="Order Delivery or Takeaway"/>
            <div className="container text-center mt-5">
                <div className="row row-cols-3">
                    {
                        data.map((card) => 
                            <Card
                                key={card.id} // must add key for lists !!!!
                                {...card}
                            />
                            // <Card
                            //     key={card.id} // must add key for lists !!!!
                            //     name={card.name} 
                            //     price={card.price}
                            //     description={card.description}
                            //     image_url={card.image_url}
                            //     category={card.category}
                            //     link={card.link}
                            //     rating={card.rating} 
                            // />
                        )
                    }
                </div>
            </div>
            <Footer />
        </>
     );
}

export default Home;
