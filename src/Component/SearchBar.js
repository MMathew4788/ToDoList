import React from "react";
import { useState } from "react";


function SearchBar (props){
    
    const [value, setValue] =useState('') 
    const addHandler=(e)=>{
        setValue(e.target.value);
    }
    const onSearch=(searchItem)=>{
        setValue(searchItem);
    }

    return ( 
        <div>
            <div className="serach-Container ">
                <input className="ml-3 p-2 border border-transparent"
                    type="text"
                    value={value}
                    onChange={addHandler}
                    placeholder="Search item"/>
                <button className="button-search"
                onClick={()=>onSearch(value)}
                >Search Item</button>
            </div>
           { <div className="ml-3 mr-4 p-2 cursor-pointer">
                {props.searchList.filter(Item => {
                    const searchItem = value.toLowerCase();
                    const Name = Item.name.toLowerCase();
                    return searchItem && Name.startsWith(searchItem) && Name !== searchItem;
                })
                .map((Item)=>{return <p onClick={()=>onSearch(Item.name)} key={Item.id}>{Item.name}</p>})}                
            </div>}
            
        </div>
    );
}
 export default SearchBar;