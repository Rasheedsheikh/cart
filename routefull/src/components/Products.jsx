import React, { useEffect, useState } from 'react'
import axios from "axios";
const Products = () => {
    const[data,setData]=useState([])
    const details= async()=>{
        
       try {const res= await axios.get("http://localhost:5000/products")
      
       const data=await res.data
      
        setData(data) 
      } catch (error) {
           console.log(error)
       } 
  
    }
   
    
    useEffect(()=>{

details()
    },[])
let productid=[]
    const handleClick= async(id)=>{
        console.log(id)
const res= await axios.get (`http://localhost:5000/Products/${id}`)

//  console.log(res)
productid.push(res)

    
    localStorage.setItem("id",JSON.stringify(productid));
    }
  return (
    <div>
          {data.map((item)=>{
              console.log(item)
              return(
                  <div>
                      
                <h2>{item.name}</h2>
                <img src={item.image}/>
                <h2>{item.Price}</h2>
                <h2>{item.category}</h2>
                <button onClick={()=>{handleClick(item.id)}}>Add to Cart</button>
                  </div>

              )

          })}
    </div>
  )
}

export default Products

