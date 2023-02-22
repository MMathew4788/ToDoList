import DelIcon from "./image/delete-icon.svg"

const ListItem =(props)=>{
 return(
      // Generating JSX code for Displaying each item
    props.uniqueList.filter((Item) => {
    const searchItem = props.searchvalue.toLowerCase();
    const Name = Item.name.toLowerCase();
    return Name.includes(searchItem)}).map((Item) => {
    return <p key={Item.id} className="ListItem" onClick={props.strikeElement}>   
        {Item.name} 
        <img src={DelIcon} alt="delete-icon" className="cursor-pointer" 
        onClick={() => props.removeElement(Item.id)}/>
    </p>;
  })
 )   
}

export default ListItem