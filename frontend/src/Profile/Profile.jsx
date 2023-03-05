import React, { useState } from 'react'
import UpdatedUser from '../UpdatedUser/UpdatedUser'
import "./profile.css"
import validation from './validation'
const Profile = () => {
    const [errors,setErrors] = useState({})
    const [dataIsCorrect,setDataIsCorrect]= useState(false)
    const[updated,setUpdated]= useState(false)

    const[values,setValues]= useState({
        fullname:"",
        birthday:"",
        email:"",
        phone:""
    })

    const handleChange=(event)=>{
        setValues({
            ...values,
            [event.target.name]:event.target.value

        })
    }
    // console.log(values)

    const handleUpdate= async(event) =>{
        event.preventDefault()
        setErrors(validation(values))
        if(Object.keys(errors).length===0){
        setDataIsCorrect(true)
        }else{
        setDataIsCorrect(false)
        }
        try {
            if(dataIsCorrect===true&&Object.keys(errors).length===0){
                setUpdated(true)
            }
            if(dataIsCorrect===false&&Object.keys(errors).length!==0){
                setUpdated(false)
            }
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <>
    {updated&&Object.keys(errors).length===0?
        (  
                <UpdatedUser updatedUser={values} updated={updated} setUpdated={setUpdated} errors={errors}/>
        )
        :
        (
        <div className="profile-container">    
            <div className="input-profile-container">
                <div className="profile-title">Profile</div>
                <label >Full name:</label>
                <input type="text" onChange={handleChange} name="fullname" value={values.fullname}  />
                <label >Day of Birth:</label>
                <input type="text"  onChange={handleChange}  name="birthday" value={values.birthday} />
                <label >Email:</label>
                <input type="email"  onChange={handleChange}  name="email" value={values.email}/>
                {errors.email && <p className='error'>{errors.email}</p>}
                <label >Phone:</label>
                <input type="text" onChange={handleChange}  name="phone" value={values.phone} />
                {errors.phone && <p className='error' >{errors.phone}</p>}
                <div className='form-actions'>
                    <button onClick={handleUpdate} className='update-button'>Update</button>
                    <button className='cancel-button'>Cancel</button>
                </div>
            </div>   
        </div>
        ) 
    }
    </>
    

  )
}

export default Profile