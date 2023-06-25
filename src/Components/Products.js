import React,{useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {add} from '../Pages/store/cartSlice';
import { fetchProducts } from '../Pages/store/productsSlice';
import '../App.css';
import {statuses} from '../Pages/store/productsSlice'
const Products=()=>{
   const {data:products,status}=useSelector(state=>state.product);

    const dispatch=useDispatch();
    useEffect(()=>{
       
        dispatch(fetchProducts());
    },[])
    const handleAdd=(product)=>{
       dispatch(add(product));
    }
    if(status===statuses.LOADING){
        return <span id="loading">Loading...</span>
    }
    if(status===statuses.ERROR){
        return <h2 className='error'>ERR:Disconnected please check your network...!</h2>
    }
    return(
        <>
       <h3 className="productheading">Products For You</h3>
       <div className='productwrapper'>
       {
        products.map(product=>(
            <div  className='card' key={product.id}>
                <div className='imgwrapper'>
                <img src={product.image}></img></div>
                <h3>{product.title.split(' ').slice(0,4).join(' ')}</h3>
                <h4>${product.price}</h4>
               
                <button className='btn' onClick={()=>handleAdd(product)}>Add to Cart</button>
              
            </div>
        )
        )
       }
       </div>
        </>
    )
}
export default Products;