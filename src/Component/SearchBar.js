import React from "react";
import { useState } from "react";


const SearchBar=(props)=>{
    
    const [value, setValue] =useState('') 
    const addHandler=(e)=>{
        e.preventDefault();
        setValue(e.target.value);
    }
    const onSearch=(searchItem)=>{
        setValue(searchItem);
    }

    //Search List
    const SearchList= props.searchList.filter(Item => {
        const searchItem = value.toLowerCase();
        const Name = Item.name.toLowerCase();
        return searchItem && Name.startsWith(searchItem) && Name !== searchItem;
    }).map((Item)=>{return <p onClick={()=>onSearch(Item.name)} key={Item.id}>{Item.name}</p>})


    return ( 
        <div>
            <div className="serach-Container">
                <input className="ml-3 p-2 border border-transparent w-36 md:w-auto"
                    type="text"
                    value={value}
                    onChange={addHandler}
                    placeholder="Search item"/>
                <button className="button-search"
                onClick={()=>onSearch(value)}
                >Search Item</button>
            </div>
            {SearchList}
        </div>
    );
}
 export default SearchBar;