import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10/category/snowboarding')
            .then(res=>res.json())
            .then((data)=>{setItems(data)})
  }, [])

  function addToCart(item, amount = 1) {
   
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
  
    if (existingItemIndex !== -1) {

      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += amount; 
      setCartItems(updatedCartItems);
    } else {
      const newItem = { ...item, quantity: amount };
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    }
  }
  
  function deleteItem(item) {
    setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.id !== item.id));
  } 


  return (
    <>
      <Header cartItems={cartItems} />
      <Outlet context={{items, addToCart, cartItems, deleteItem}} />
      <Footer /> 
    </>
  )
}

export default App
