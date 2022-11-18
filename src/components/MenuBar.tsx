import React from "react";
import { Categories } from "../pages/Home/types";

interface Props {
    updateDisplay: Function;
    handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleSearch: Function;
    selectedCategory: string;
    search: string;
}

const categories = Object.values(Categories);

function MenuBar({updateDisplay,
                handleCategoryChange,
                handleSearch,
                selectedCategory,
                search}: Props) {
    return ( 
        <div className="d-flex p-4">
            <div className="d-flex align-items-center mx-auto">
                <button
                    onClick={() => updateDisplay('row-cols-3')} 
                    className="btn btn-sucess mx-1">
                    <i className="bi-grid-3x3-gap"></i>
                </button>            
                <button
                    onClick={() => updateDisplay('row-cols-1 list')} 
                    className="btn btn-sucess mx-1">
                    <i className="bi-list-task"></i>
                </button>     
                <label className="px-2"><strong>Category:</strong></label>
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
                <input
                    className="form-control ms-3"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => handleSearch(e)}
                ></input>
            </div>                  
        </div>
    );
}

export default MenuBar;