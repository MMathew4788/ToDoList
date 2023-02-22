
const AddItem=(props)=>{
    return(
        <div className="input-container">
          <input type="text" value={props.name} placeholder={"Enter the Name of Item"}  
            onChange={props.handleChange} 
            onClick={props.handleClear}
            style={{color: !props.isValid ? 'red' : 'black'}} //inline dynamic styling
            //Setting CSS classes dynamically 
            className={`mx-3 p-2 ${!props.isValid ? 'border border-red-900':'border border-transparent'}`}/>
          <button type="button" onClick={props.handleAdd} className="button"> Add Item </button>
        </div>
    )
}

export default AddItem;