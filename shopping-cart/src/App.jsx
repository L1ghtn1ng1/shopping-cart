import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [quantities, setQuantities] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=3')
            .then(res=>res.json())
            .then((data)=>{setItems(data)})
  }, [])

  useEffect(() => {
    console.log(quantities)
  }, [quantities])

  function addToCart(item, amount = 1, increment = true) {
   
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
  
    if (existingItemIndex !== -1) {

      const updatedCartItems = [...cartItems];
      if (increment){
        updatedCartItems[existingItemIndex].quantity += amount;
      } else {
        updatedCartItems[existingItemIndex].quantity -= 1;
      }
      setCartItems(updatedCartItems);
    } else {
      const newItem = { ...item, quantity: amount };
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    }
  }
  
  function deleteItem(item) {
    setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.id !== item.id));
  } 


  function updateQuantity(item,amount) {
    const newQuantities = { ...quantities };
    newQuantities[item.id] = parseInt(amount, 10) || 1;
    setQuantities(newQuantities);
  }

  return (
    <>
      <Header cartItems={cartItems} />
      <Outlet context={{items, addToCart, cartItems, deleteItem, quantities, updateQuantity}} />
      <Footer /> 
    </>
  )
}

export default App
