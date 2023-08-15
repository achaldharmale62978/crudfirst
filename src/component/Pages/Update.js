import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

    const navigate = useNavigate()

    const {usersId}=useParams()

    const{register,handleSubmit,setValue}=useForm()

    async function fetchdata(){
        const result = await
        axios.get(`http://localhost:7070/student/${usersId}`)
        setValue("fname",result.data.fname)
        setValue("lname",result.data.lname)
        setValue("email",result.data.email)
        setValue("sallary",result.data.sallary)
        setValue("post",result.data.post)
        setValue("mobno",result.data.mobno)
        
    }

    function savedata(data){
        axios.put(`http://localhost:7070/student/${usersId}`,data)
        navigate("/pages/showdata")
    }
    useEffect(()=>{
        fetchdata()

    })

    return (
        <>
        <div className='col-6 offset-3 ' >
            <form onSubmit={handleSubmit(savedata)}>
                <div className='form-group'>
                    <label htmlFor="fname">First Name</label>
                    <input to="fname" type='text' className='form-control' {...register("fname")} />
                </div>
                <div className='form-group'>
                    <label htmlFor="lname">Last Name</label>
                    <input to="lname" type='text' className='form-control'{...register("lname")} />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input to="email" type='email' className='form-control'{...register("email")} />
                </div>
                <div className='form-group'>
                    <label htmlFor="sallary">Sallary</label>
                    <input to="sallary" type='num' className='form-control'{...register("sallary")} />
                </div>
                <div className='form-group'>
                            <label htmlFor='post'>Post</label>
                            <select className="form-select" aria-label=" select post" {...register("post")}>
                                <option selected>Open this select post</option>
                                <option value="devloper">Devloper</option>
                                <option value="testing">Testing</option>
                                <option value="assistant">Assistant</option>
                                <option value="maneger">Maneger</option>
                            </select>
                        </div><br/>
                <div className='form-group'>
                    <label htmlFor="mobno">Mobile No.</label>
                    <input to="mobno" type='num' className='form-control'{...register("mobno")} />
                </div>
                <div>
                    <button className=" b btn btn-outline-success" type="submit">Update</button>
                    <button className="b btn btn-outline-success" type="reset">Reset</button>
                </div>

            </form>
        </div>
        </>
    )
}

export default Update