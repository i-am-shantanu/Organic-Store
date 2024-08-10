import { memo,useState } from "react";

function SearchBar({
    handleSearch
}){

    console.log("search Bar Rendered !!");
    const[searchValue,setSearchValue]=useState("");
    

    const inputStyle={
    width: "180px",
    height: "30px",
    borderRadius: "50px",
    textAlign: "center",
    marginRight: "10px"

    }

    const buttonStyle={
    width: "60px",
    height: "30px",
    backgroundColor: "green",
    color:"white",
    borderRadius: "15px"

    }

    

    return(
        <>
            <form onSubmit={(e)=>{e.preventDefault();handleSearch(searchValue)}} >
                <input placeholder='Search Products...' value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}
                style={inputStyle}></input>
                <button type='submit' style={buttonStyle}>Search</button>
            </form>
        </>
    )
}
export default memo(SearchBar)