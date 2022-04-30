import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
 const navigation=useNavigate()
    const [login,setLogin]=useState("")

    const handleChanage=(e)=>{
        //   e.target.value
setLogin((prev)=>({
...prev,
[e.target.name]: e.target.value
})
)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(login)
     localStorage.setItem("details", JSON.stringify(login))
     navigation("/home")
    }
   

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label> username </label>
            <input type="text" name="username" onChange={handleChanage}/>

            <label> password </label>
            <input type="text" name="password" onChange={handleChanage}/>

        <input type="submit" />
        </form>
    </div>
  )
}

export default Login