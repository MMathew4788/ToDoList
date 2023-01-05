import React from "react";
import { useState } from "react";

function App() {

  const InitialList = []; //Initial list

  // handle click of button to add new Item to list and clearfield
  const [List, setList] = useState(InitialList);
  function handleAdd() {
    if (name.trim().length === 0){
      return;
    }
    const newList = List.concat({name, id: Math.random().toString()});
    setList(newList);
    setName('');//clears the input field
  }

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

  // Generating JSX code for Displaying each item
  const ListItem = List.map((Item) => {
    return <p key={Item.id} className="ListItem" onClick={() => removeElement(Item.id)}>
                {Item.name}
            </p>;
  });

  return (
    <div className="flex h-screen justify-center">
      <div className="card-container">
        <div className="input-container">
          <input type="text" value={name}  onChange={handleChange} className="mx-3 p-2"/>
          <button type="button" onClick={handleAdd} className="button"> Add Item </button>
        </div>
        <div className="space-y-3 m-3">
          <div className="label">List of Items</div>
          {ListItem}
        </div>
      </div>
    </div>
  );
}

export default App;
