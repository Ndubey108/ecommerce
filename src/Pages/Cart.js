import React from 'react';
import '../App.css';
import { useSelector} from 'react-redux/es/hooks/useSelector';
import {useDispatch} from 'react-redux';
import {remove} from './store/cartSlice';
const Cart = () => {
    const products = useSelector(state => state.cart)
    const dispatch=useDispatch();
    const handleRemove=(productid)=>{
            dispatch(remove(productid));
    }
    return (
        <>
            <div className='cart'>
                <h3>Items:{products.length}</h3>
                <div className='cartwrapper'>
                    {
                         products.length===0?<span className="cartmsg">No products are Added.</span>:products.map(product => (
                            <div className='cartCard'>
                                <img src={product.image}></img>
                                <h3>{product.title.split(' ').slice(0, 4).join(' ')}</h3>
                                <h4>${product.price}</h4>
                                <button className='btn btn1'>Buy Now</button>
                                <button className='btn btn2' onClick={() => handleRemove(product.id)}>Remove</button>

                            </div>
                        ))
                       
                    }
                </div>
            </div>
        </>
    )
}
export default Cart;