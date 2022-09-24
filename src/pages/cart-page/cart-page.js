import React from 'react'
import { Button } from 'react-bootstrap';
import { increaseCartQnt, decreaseCartQnt, removeCart } from '../../redux/actions/cart';
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
    const {cart} = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();

   const totalPrice = () => {
    let total = 0;
    if(cart) {
        cart.map((item) => {
            total = total + (item.Price * item.quantity);
        })
    }
    return total;
   }

    return (
        <>
            <h1 className='mb-5'>CART PAGE</h1>
            {cart.length > 0 ? (
                <>
                    {cart && cart.map((item) => (
                        <div key={item.id} className='m-4 d-flex flex-row border p-3 justify-content-between'>
                            <div className='d-flex'>
                                <img src={item.image} alt="img" style={{ width: "50px", height: "50px" }} />
                                <div className='ml-3'> {item.product_title} </div>
                            </div>

                            <div>
                                <span>Quantity: </span>
                                <Button onClick={() => dispatch(increaseCartQnt(item))}>+</Button>
                                <span className='p-3'>{item.quantity}</span>
                                <Button onClick={() => dispatch(decreaseCartQnt(item))}>-</Button>
                            </div>

                            <div className='d-flex'>
                                <div className='mr-3'>Price: $ {item.Price * item.quantity}</div>
                                <Button onClick={() => dispatch(removeCart(item))}>Remove</Button>
                            </div>
                        </div>
                    ))}
                    <div className='display-6'> Total Price : $ {totalPrice()}</div>
                </>
            ) : (
                <>
                    <div className='display-6 right'>No Product Available in Cart</div>
                </>
            )}
           

            
        </>
    )
}

export default CartPage;