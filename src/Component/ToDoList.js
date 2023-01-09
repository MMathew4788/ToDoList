import React from "react";
import { useState } from "react";
import DelIcon from "./image/delete-icon.svg"

function ToDoList() {

  const InitialList = []; //Initial list

  // handle click of button to add new Item to list and clearfield
  const [List, setList] = useState(InitialList);
  const [isValid, setIsValid] = useState(true);//set red color in input box
  const Message = 'Please enter something';
  function handleAdd() {
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
    setName('');//clears the input field
  }

  // checking for duplicate 
  const uniqueList = [...new Map(List.map(item => [item.name, item])).values()]
  
  // remove items on click  
  function removeElement(id) {
    const deletedNewList = List.filter(List => List.id !== id);
    setList(deletedNewList);
  };

  //handle change of input field
  const [name, setName] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }

  //Clearing the input field on click
  function handleClear(){
    setName('');
    setIsValid(true);
  }

  // Generating JSX code for Displaying each item
  const ListItem = uniqueList.map((Item) => {
    return <p key={Item.id} className="ListItem" onClick={() => removeElement(Item.id)}>
        {Item.name}
        <img src={DelIcon} alt="delete-icon" />
    </p>;
  });


  return (
     <div className="card-container">
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
