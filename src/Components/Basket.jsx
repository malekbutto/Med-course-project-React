import React from 'react'
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer, Zoom } from 'react-toastify';

const Basket = (props) => {
    const removeQ=()=>{
        toast("Quentity Has Decreased",{
          className:"custom-toast",
          draggable:true,
          position: toast.POSITION.BOTTOM_LEFT
        })
      }
      const addQ=()=>{
        toast("Quentity Has Increased",{
          className:"custom-toast",
          draggable:true,
          position: toast.POSITION.BOTTOM_LEFT
        })
      }
    const {cartItems , onAdd , onRemove} = props;
    const itemsPrice = cartItems?.reduce((a,c) => a + c.price * c.qty, 0)
    const totalPrice = itemsPrice;
  return (
    <div className='block-col-1'>
        <ToastContainer draggable={false} transition={Zoom} autoClose={4000} limit={3}/>;
        <h2>Cart Items</h2>
        <div>{cartItems?.length === 0 && <div>Cart Is Empty</div>}</div>
        <div></div>{cartItems?.map((item) => (
            <div key={item.id} className="roww">
                <img className='small' src={item.image} alt={item.name}></img>
                <div>{item.name}</div>
                <div>
                    <button onClick={() => {onAdd(item); {addQ()}}} className="add">+</button>
                    <button onClick={() => {onRemove(item); {removeQ()}}} className="remove">-</button>
                </div>
                <div>
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
            </div>
        ))}
        {cartItems?.length !== 0 && (
            <>
            <hr></hr>
            <div className='row'>
                <div className='col-2'><strong>Total Price:${totalPrice?.toFixed(2)}</strong></div>
            </div>
            <div className='row'>
                <button onClick={() => alert('Item Purchased Successfuly')}>Checkout</button>
            </div>
            </>
        )}
    </div>
  )
}

export default Basket;