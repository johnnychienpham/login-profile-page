import React from 'react'
import "./updatedUser.css"
const UpdatedUser = (props) => {
    const {updatedUser,updated,setUpdated,errors}=props // same name of the arguments from Profile.jsx
    const handleEdit=()=>{
        setUpdated(!updated)
    }
  return (
    <div className="updated-container">    
            <div className="input-updated-container">
                <div className="updated-title">Updated User Information</div>
                <label >Full name:</label>
                <p>{updatedUser.fullname}</p>
                <label >Day of Birth:</label>
                <p>{updatedUser.birthday}</p>
                <label >Email:</label>
                <p>{updatedUser.email}</p>
                
                <label >Phone:</label>
                <p>{updatedUser.phone}</p>
                <div className='updated-actions'>
                    <button onClick={handleEdit} className='edit-button'>Edit</button>
                </div>
            </div>   
    </div>
  )
}

export default UpdatedUser