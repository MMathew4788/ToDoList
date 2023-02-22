
const SearchItem=(props)=>{
    return(
        <div className="serach-Container">
        <input className="ml-3 p-2 border border-transparent w-36 md:w-auto"
            type="text"
            value={props.searchvalue}
            onChange={props.addHandler}
            placeholder="Search item"/>
        <button className="button-search"
        onClick={()=>props.onSearch(props.searchvalue)}
        >Search Item</button>
    </div>
    )
}

export default SearchItem;