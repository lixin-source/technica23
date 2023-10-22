import React from 'react'

function UserProfile(){
    return(
        <div className='bg-main'>
            <h1 className='text-center'>User's Profile</h1>
            <img src="https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg?w=360" className='img-fluid' alt='happy cartoon penguin'/>
            <p className='.text-success'>Number of tasks completed: </p>
            <p className='.text-danger'>Number of tasks to be completed: </p>
            
        </div>
    )
}

export default UserProfile 