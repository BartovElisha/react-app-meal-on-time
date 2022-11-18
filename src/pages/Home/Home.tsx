import React, { useState } from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import MenuBar from "../../components/MenuBar";
import Title from "../../components/Title";
import { data } from "./data";
import './Home.css';
import { CardType, Categories } from "./types";

function Home() {
    // Application States
    const [display, setDisplay] = useState('row-cols-3');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filtered,setFiltered] = useState([...data]);
    const [search,setSearch] = useState('');

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
        categoryChange(value);
    }

    function categoryChange(value: Categories) {
        const filteredData = filteredByCategory(value, [...data]);
 
        setSelectedCategory(value);
        setFiltered(filteredData);
    }    

    // This function does search process and filter data
    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        // 1. Get Value
        const value = e.target.value; // Value from search bar
                
        let result = [...data];

        if(value.length > 0) {
            const stripVal = value.trim(); // Remove Spaces
            // 2. Filter cards
            result = [...data].filter((card => card.name.toLowerCase().includes(stripVal.toLowerCase())));
        }

        setSelectedCategory(Categories.all);
        setSearch(value);
        setFiltered(result);
    }

    return ( 
        <>
            <Title content="Order Delivery or Takeaway"/>
            <MenuBar
                updateDisplay={handleDisplayClick}
                handleCategoryChange={handleCategoryChange}
                handleSearch={handleSearch}
                selectedCategory={selectedCategory} 
                search={search}
            />
            {/* List of Dashes */}
            <div className="container text-center mt-2 mx-center">  
            {
                // Condition rendering
                // Example x.length === 0 ? 'Yes' : 'No'
                filtered.length === 0 ? (
                    <p className="mt-4"><strong>No Dishesh Found</strong></p>
                ):(
                    <div className={`row ${display} p-5`}>
                        {
                            filtered.map((card) => 
                                <Card
                                    key={card.id} // must add key for lists !!!!
                                    {...card}
                                    handleCategoryClick={categoryChange}
                                />
                            )
                        }
                    </div>
                )  
            }
            </div>            
            <Footer />
        </>
     );
}

export default Home;
