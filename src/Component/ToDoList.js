import React from "react";
import { useState } from "react";
import DelIcon from "./image/delete-icon.svg"

const ToDoList=()=> {

  let InitialList = JSON.parse(localStorage.getItem('savedList'))||[];//Initial list
  
  // handle click of button to add new Item to list and clearfield
  const [List, setList] = useState(InitialList);
  const [isValid, setIsValid] = useState(true);//set red color in input box
  const Message = 'Please enter something';
  const handleAdd=()=> {
      if (name.trim().length === 0){ //when blank it adds nothing
      return (
        [setName('Please enter something'),
        setIsValid(false)]  
        )}   
      
      if (name===Message){
      return null;
      }
    
    const newList = List.concat({name, id: Math.random().toString()});
    setList(newList);
    
    localStorage.setItem('savedList', JSON.stringify(newList)); //saving to local storage
    setName('');//clears the input field
  }

  // checking for duplicate 
  const uniqueList = [...new Map(List.map(item => [item.name, item])).values()]
  
  // remove items on click  
  const removeElement=(id)=> {
    const deletedNewList = List.filter(List => List.id !== id);
    setList(deletedNewList);
    localStorage.setItem('savedList', JSON.stringify(deletedNewList)); //saving to local storage
  };

   //striking the item in click
    const strikeElement=(e)=> {
      if (e.target.style.textDecoration) {
    e.target.style.removeProperty('text-decoration');
    } else {
    e.target.style.setProperty('text-decoration', 'line-through');
    } }
  

  //handle change of input field
  const [name, setName] = useState("");
  const handleChange=(e)=> {
    setName(e.target.value);
  }

  //Clearing the input field on click
    const handleClear=()=>{
    setName('');
    setIsValid(true);
    }

   // search Bar
    const [searchvalue, setSearchValue] =useState('') 
    const addHandler=(e)=>{
        e.preventDefault();
        setSearchValue(e.target.value);
    }
    const onSearch=(searchItem)=>{
        setSearchValue(searchItem);
    }

    //Search List

  // Generating JSX code for Displaying each item
  const ListItem = uniqueList.filter((Item) => {
    const searchItem = searchvalue.toLowerCase();
    const Name = Item.name.toLowerCase();
    return Name.includes(searchItem)}).map((Item) => {
    return <p key={Item.id} className="ListItem" onClick={strikeElement}>   
        {Item.name} 
        <img src={DelIcon} alt="delete-icon" className="cursor-pointer" 
        onClick={() => removeElement(Item.id)}/>
    </p>;
  });

  return (
     <div className="card-container">
          <div className="serach-Container">
                <input className="ml-3 p-2 border border-transparent w-36 md:w-auto"
                    type="text"
                    value={searchvalue}
                    onChange={addHandler}
                    placeholder="Search item"/>
                <button className="button-search"
                onClick={()=>onSearch(searchvalue)}
                >Search Item</button>
          </div>
          <div className="input-container">
          <input type="text" value={name} placeholder={"Enter the Name of Item"}  
            onChange={handleChange} 
            onClick={handleClear}
            style={{color: !isValid ? 'red' : 'black'}} //inline dynamic styling
            //Setting CSS classes dynamically 
            className={`mx-3 p-2 ${!isValid ? 'border border-red-900':'border border-transparent'}`}/>
          <button type="button" onClick={handleAdd} className="button"> Add Item </button>
        </div>
        <div className="space-y-3 m-3">
          <div className="label">List of Items</div>
          
          {ListItem}
        </div>
    </div>
     );
}

export default ToDoList;