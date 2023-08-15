import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const {register,handleSubmit}=useForm()

  const nevigate = useNavigate()

      async function savedata (data){
        axios.post("http://localhost:7070/student",data)
        console.log(data)
        alert("data addedd..")
        nevigate("/pages/showdata")
  }
  return (
    <>
      <form className='col-6 offset-3 '  onSubmit={handleSubmit(savedata)}>
        <div className='form-group'>
          <label htmlFor="fname">First Name</label>
          <input to="fname" type='text' className='form-control' {...register("fname")}/>
        </div>
        <div className='form-group'>
          <label htmlFor="lname">Last Name</label>
          <input to="lname" type='text' className='form-control'{...register("lname")}/>
        </div>
        <div className='form-group'>
          <label htmlFor="email">Email</label>
          <input to="email" type='email' className='form-control'{...register("email")}/>
        </div>
        <div className='form-group'>
          <label htmlFor="sallary">Sallary</label>
          <input to="sallary" type='num' className='form-control'{...register("sallary")}/>
        </div>
        <div className='form-group'>
          <label htmlFor="post">Post</label>
          <select className="form-select" aria-label="Default select example" {...register("post")}>
            <option selected >Open this select post</option>
            <option value="manager">Manager</option>
            <option value="developer">Developer</option>
            <option value="tester">Tester</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor="mobno">Mobile No.</label>
          <input to="mobno" type='num' className='form-control'{...register("mobno")}/>
        </div>
        <div>
            <button className="b btn btn-outline-success" type="submit">Submit</button>
            <button className="b btn btn-outline-success" type="reset">Reset</button>
        </div>

      </form>
    </>
  )
}

export default Login