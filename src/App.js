import React from "react";
import { useState } from "react";

function App() {

  const InitialList = []; //Initial list
  
  // handle click of button
  const [List, setList] = useState(InitialList);
  function handleAdd() {
    const newList = List.concat({name, id: Math.random().toString()});
    setList(newList);
    setName('');//clears the input field
  }

  //handle change of input field
  const [name, setName] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }

  // Generating JSX code for Displaying each item
  const ListItem = List.map((Item, Index) => {
    return <p key={Item.id} className="ListItem">{Item.name}</p>;
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
