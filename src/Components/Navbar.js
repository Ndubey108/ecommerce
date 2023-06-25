import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, UseSelector } from 'react-redux/es/hooks/useSelector';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shoppingcart from '../images/shoppingcart.png';

import '../App.css'
const Navbar=()=>{
    const items=useSelector((state)=>state.cart);
    return(
        <>
       
         <div className='navItems'>
         <h1 className='heading'>Shopify</h1>
         <div className='link'>
            <Link to="/" className='navLink margin-l'>Home</Link>
            <input type="text" className='text margin-l' placeholder='Search for products'></input>
            <Link to="/Cart" className='navLink margin-l'>  <span className='cart-count margin-l'><img src={shoppingcart} className="cartimg"></img><span className='count'>{items.length}</span></span></Link>
       
          
            </div>
       
         </div>
       
        </>
    )
}
export default Navbar;