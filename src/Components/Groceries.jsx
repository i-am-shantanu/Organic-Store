import './Everything.css'
import { useCallback, useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import SearchBar from '../Utility_Components/SearchBar';
import { performFilter, searchProducts, setCurrentByCategory, sortProducts } from '../Features/ProductSlice';
import { Link } from 'react-router-dom';
function Groceries(){
    const[rangeMax,setRangeMax]=useState(400)
    const products=useSelector(state=>state.products.currentProducts)
    const dispatch=useDispatch();
    console.log("rendered");

    useEffect(()=>{dispatch(setCurrentByCategory('Groceries'))},[]);

    

    function handleSlider(e){

        let maxprice=Number(e.target.value)
        setRangeMax(maxprice);
        console.log(maxprice);
        dispatch(performFilter({category:"all",maxprice}));
    }

    function handleSelector(e){
        console.log(e.target.value);
        dispatch(sortProducts(e.target.value));
    }

    const handleSearch= useCallback((e)=>{
        
        console.log(e);
        dispatch(searchProducts({category:'Groceries',text:e}))
    },[])
    return(
        <>
        <div className="everything-container">
        <div className="left">
            <div>
                <SearchBar handleSearch={handleSearch}/>
            </div>

            <div className="filter">
                <h3 style={{color:'green'}}>Filter By price</h3>
                <input type='range' min={0} max={400} style={{accentColor:'Green'}} value={rangeMax} onChange={(e)=>{handleSlider(e)}}/>
                <h3 style={{padding:'2px',backgroundColor:'white',textAlign:'center',borderRadius:'15px'}}>0 - {rangeMax}</h3>
            </div>

            <div className='sorting' onChange={handleSelector}>
                <select>
                    <option value='default'>Default Sorting</option>
                    <option value='ascending'>Price : Low to High</option>
                    <option value='descending'>Price :High to low</option>
                </select>
            </div>
        </div>
        <div className="right" >
            {
                products.map((obj)=>(
                    <Link to={String(obj.id)} key={obj.id}>
                <div className="card" >
                <img src={obj.url}/>
                <h4 style={{margin:'5px 0px',padding:'0px'}}>{obj.category}</h4>
                <h2 style={{margin:'10px 0px',padding:'0px'}}>{obj.name}</h2>
                <h3 style={{margin:'0px',padding:'0px'}}>Rs. {obj.price}</h3>
                </div>
                    </Link>
                ))
            }
            

        </div>
        </div>


        </>
    )
}
export default Groceries

