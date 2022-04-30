import axios from 'axios'
import React ,{useState}from 'react'
import styled from "styled-components"

const Cart = () => {

    const thing= JSON.parse(localStorage.getItem("id"))
    const [products,setProducts]=useState(thing)
    console.log(thing)

    const handleClick=(id)=>{
        const newproduct= products.splice(id,1)
        setProducts(newproduct)
    }
  return (
    <div>Cart
{products.map((item)=>{
    return (
                <BOXX>

        <div>
             <h2>{item.data.name}</h2>
                <img src={item.data.image}/>
                <h2>{item.data.Price}</h2>
                <h2>{item.data.category}</h2>
                <button onClick={()=>handleClick(item.data.id)}>Remove</button>
        </div>
                </BOXX>
    )
})}
    </div>
  )
}

export default Cart

const BOXX= styled.div`
 div{display:grid;
grid-template-column:repeat(2,1fr)}
`

