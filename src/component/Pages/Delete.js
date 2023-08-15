import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Delete = () => {
  const [user,setuser]=useState({})

  const nevigate=useNavigate()

  const {usersId}=useParams()

  async function Fetchdata(){
    const result =await 
     axios.get(`http://localhost:7070/student/${usersId}`)
     setuser(result.data);

  }
 
 useEffect(()=> {
  Fetchdata()
 },[])

  function Deletee (){
    axios.delete(`http://localhost:7070/student/${usersId}`)
    nevigate('/pages/showdata')
  }

  

  return (
    <>
        <h2  style={{textAlign:'center'}}>Delete user data</h2>

        <form onSubmit={()=>Deletee()}>
          <h2 style={{textAlign:"center"}}>You want to delete <span>{user.fname} </span> data </h2>
          <input type='submit' value="Yes" style={{textAlign:"center" }} className=' b btn btn-outline-danger col-3 offset-3'></input>
          <NavLink to={"/pages/showdata"}><button type='button' className='b btn btn-outline-warning col-3 '>No</button></NavLink>
        </form>
    </>
  )
}

export default Delete