import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value

    setData(data => ({ ...data, [name]: value }))
  }

  const placeOrder = async (event) => {
    event.preventDefault()
    let orderItems = []

  }



  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input onChange={onChangeHandler} type="text" name='firstName' value={data.firstName} placeholder='First name' />
          <input onChange={onChangeHandler} type="text" name='lastName' value={data.lastName} placeholder='Last name' />
        </div>
        <input onChange={onChangeHandler} type="email" name='email' value={data.email} placeholder='Email address' />
        <input onChange={onChangeHandler} type="text" name='street' value={data.street} placeholder='Street' />
        <div className="multi-fields">
          <input onChange={onChangeHandler} type="text" name='city' value={data.city} placeholder='City' />
          <input onChange={onChangeHandler} type="text" name='state' value={data.state} placeholder='State' />
        </div>
        <div className="multi-fields">
          <input onChange={onChangeHandler} type="text" name='zipcode' value={data.zipcode} placeholder='Zip code' />
          <input onChange={onChangeHandler} type="text" name='country' value={data.country} placeholder='Country' />
        </div>
        <input onChange={onChangeHandler} type="text" name='phone' value={data.phone} placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs.{getTotalCartAmount() === 0 ? 0 : 25}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 25}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder 