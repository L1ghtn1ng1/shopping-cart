import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import Checkout from './components/Checkout.jsx'
import ItemPage from './components/ItemPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home />},
      { path: "home", element: <Home />},
      { path: "shop", element: <Shop />},
      { path: "checkout", element: <Checkout />}, 
      { path: "item/:id", element: <ItemPage />},
    ],
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);