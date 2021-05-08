import React from 'react';
import Orderd from '../Orderd/Orderd';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart

    const totalPrice = cart.reduce((total, sum) => total + sum.price, 0)
    return (
        <>
            <div className="card cart-container">
                <div className="bg-light p-3 cart-price">
                    <h1>Added Course: {cart.length}</h1>
                    <h3>Total Price: ${totalPrice}</h3>
                </div>
                <div className ="orderd">
                    {
                        cart.map(added => <Orderd added={added}></Orderd>)
                    }
                </div>

            </div>
        </>
    );
};

export default Cart;