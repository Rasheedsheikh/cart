import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import Products from './Products'
const Home = () => {
  return (
    <div>
        <BOX>
        <ul>
           <Link to="/"><li>Home</li></Link> 
           <Link to="/login"><li>Login</li></Link>
           
           <Link to="/about"><li>About</li></Link>
           <Link to="/cart"><li>Cart</li></Link>
        </ul>
        </BOX>
        

        <Products/>
    
    </div>
  )
}

export default Home

const BOX=styled.div`
background: black;
padding:12px;
 ul{
     display:flex;
justify-content:space-evenly;

 },
 li{
     color:white;
text-decoration :none;
   
 }

`