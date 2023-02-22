import React from "react";
import { useState } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
import SearchItem from "./SearchItem";

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

   //striking the item on click
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

  return (
     <div className="card-container">
          <SearchItem searchvalue={searchvalue} onSearch={onSearch} addHandler={addHandler} handleAdd={handleAdd}/>
          <AddItem name={name} handleChange={handleChange} handleClear={handleClear} isValid={isValid}/>
        <div className="space-y-3 m-3">
          <div className="label">List of Items</div>
          <ListItem uniqueList={uniqueList} searchvalue={searchvalue} removeElement={removeElement} strikeElement={strikeElement}/>
        </div>
    </div>
     );
}

export default ToDoList;