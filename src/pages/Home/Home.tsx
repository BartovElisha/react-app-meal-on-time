import React, { useState } from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import './Home.css';

enum Categories {
    all='All',
    vegeterian='Vegeterian',
    asian='Asian',
    chicken='Chicken'
}

interface CardType {
    id: number;
    name: string;
    price: number;
    description: string;
    image_url: string;
    category: Categories;
    link: string;
    rating: number;
}

function Home() {
    const data = [
        {
            id: 1,
            name: "Greek Salad", 
            price: 30.5,
            description: "Salad with olives",
            image_url: "https://cdn.pixabay.com/photo/2017/01/09/20/23/pasta-salad-1967501_1280.jpg",
            category: Categories.vegeterian,
            link: "https://www.edimdoma.ru/jivem_doma/posts/23010-sostavlyaem-legkoe-menyu-na-nedelyu",
            rating: 5
        },
        {
            id: 2,
            name: "Pad Thai", 
            price: 45,
            description: "Very good and tasty",
            image_url: "https://cdn.pixabay.com/photo/2017/02/25/15/23/pad-thai-2098017_1280.jpg",
            category: Categories.asian,
            link: "https://www.edimdoma.ru/retsepty/8643-pad-thai-tayskaya-lapsha",
            rating: 4 
        },
        {
            id: 3,
            name:"Fried Chieken", 
            price:98.6,
            description: "Fried chicken chips...",
            image_url: "https://cdn.pixabay.com/photo/2017/03/20/09/08/food-2158543_1280.jpg",
            category: Categories.chicken,
            link: "https://www.edimdoma.ru/retsepty/40374-na-kurinyh-nozhkah-chicken-lollipops",
            rating: 5
        },
        {
            id: 4,
            name:"Fried Chieken", 
            price:98.6,
            description: "Fried chicken chips...",
            image_url: "https://cdn.pixabay.com/photo/2017/03/20/09/08/food-2158543_1280.jpg",
            category: Categories.chicken,
            link: "https://www.edimdoma.ru/retsepty/40374-na-kurinyh-nozhkah-chicken-lollipops",
            rating: 5
        },
        {
            id: 5,
            name:"Fried Chieken", 
            price:98.6,
            description: "Fried chicken chips...",
            image_url: "https://cdn.pixabay.com/photo/2017/03/20/09/08/food-2158543_1280.jpg",
            category: Categories.chicken,
            link: "https://www.edimdoma.ru/retsepty/40374-na-kurinyh-nozhkah-chicken-lollipops",
            rating: 5
        }
    ];

    const categories = Object.values(Categories);
    // const categories = ['All','Vegeterian','Asian','Chicken'];

    // States
    const [display, setDisplay] = useState('row-cols-3');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filtered,setFiltered] = useState([...data]);

    function handleDisplayClick(displayType: string) {
        setDisplay(displayType);
    }

    function filteredByCategory(category: Categories, cards: Array<CardType>):Array<CardType> {
        if(category === Categories.all) {
            return cards;
        }
        return cards.filter(card => card.category === category);         
    }

    function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value as Categories;
        const filteredData = filteredByCategory(value, [...data]);
 
        setSelectedCategory(value);
        setFiltered(filteredData);
    }

    return ( 
        <>
            <Title content="Order Delivery or Takeaway"/>
            <div className="container text-center mt-2">
                <button
                    onClick={() => handleDisplayClick('row-cols-3')} 
                    className="btn btn-sucess mx-1">
                    <i className="bi-grid-3x3-gap"></i>
                </button>
                <button
                    onClick={() => handleDisplayClick('row-cols-1 list')} 
                    className="btn btn-sucess mx-1">
                    <i className="bi-list-task"></i>
                </button>
                <div>
                    <label>Category</label>
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange} 
                        className="form-select">
                        {
                            categories.map((category) => 
                                <option
                                    key={category}
                                    value={category}
                                    >{category}
                                </option>
                            )                           
                        }                                        
                    </select>
                </div>
            </div>
            <div className="container text-center mt-2">            
                <div className={`row ${display} p-5`}>
                    {
                        filtered.map((card) => 
                            <Card
                                key={card.id} // must add key for lists !!!!
                                {...card}
                            />
                        )
                    }
                </div>
            </div>
            <Footer />
        </>
     );
}

export default Home;
