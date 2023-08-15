import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Showdata = () => {

  const[user,setuser]=useState([])

  async function fetchdata(){
    const result=await
    axios.get(`http://localhost:7070/student`)
    setuser(result.data)
    console.log(result.data)

  }

  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Sallary</th>
            <th scope="col">Post</th>
            <th scope="col">Mob No</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map(userr=>{
              return(
                
                  <tr key={userr.id}>
                    <td>{userr.fname}</td>
                    <td>{userr.lname}</td>  
                    <td>{userr.email}</td>
                    <td>{userr.sallary}</td>
                    <td>{userr.post}</td>
                    <td>{userr.mobno}</td>
                    <td>
                          <NavLink to={`/pages/update/${userr.id}`}><button className="b btn btn-outline-success" type="button">Update</button></NavLink>
                          <NavLink to={`/pages/delete/${userr.id}`}><button className="b btn btn-outline-success" type="reset">Delete</button></NavLink>
                    </td>
                  </tr>
                
              )
            })
          }
          
        </tbody>
      </table>
    </>
  )
}

export default Showdata