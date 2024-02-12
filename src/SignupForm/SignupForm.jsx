import React from 'react'
import "./SignupForm.css"



const SignupForm = () => {

    const [userDetails,setUserDetails] = React.useState({
        email:"",
        name:"",
        country:"",
        age:"",
        password:""
    })

    const [error,setError] = React.useState("")

    const changeHandler = (e)=>{
        setUserDetails({...userDetails,[e.target.name]:e.target.value})
        setError("")
    }

    const submitHandler = (e)=>{

        let isValid = true
        const errorMessages = {}
        

        try{
            if(!userDetails.email)
            {
                errorMessages.email= "enter valid email address"
            }
            
            else if(!userDetails.password || userDetails.password < 8)
            {
                setError("password must be at least 8 characters")
            }

            else if(isValid)
            {

            }
                e.preventDefault()
                console.log(userDetails)
            
        }

        catch(error)
        {
            console.log(error)
        }
    }


  return (
    <div className='signup-container'>
       
    <h2>Signup Form</h2>
        <form className='form' onSubmit={submitHandler}>
            <label htmlFor='email-field'>
                <input type='email' id='email-field'
                  placeholder='Enter Your Email'
                  name='email'
                  value={userDetails.email}
                  onChange={changeHandler}
                 />
            </label>

            {error && <p className="error-message">{error}</p>}

            <label htmlFor='name-field'>
                <input type='text' id='name-field'
                  placeholder='Enter Your Name'
                  name='name'
                  value={userDetails.name}
                  onChange={changeHandler}
                 />
            </label>

            {error && <p className="error-message">{error}</p>}


            <label htmlFor='country-field'>
                <input type='text' id='country-field'
                  placeholder='Enter Your Country'
                  name='country'
                  value={userDetails.country}
                  onChange={changeHandler}
                 />
            </label>

            <label htmlFor='age-field'>
                <input type='number' id='age-field'
                  placeholder='Enter Your Age'
                  name='age'
                  value={userDetails.age}
                  onChange={changeHandler}
                 />
            </label>

            <label htmlFor='password-field'>
                <input type='password' id='password-field'
                  placeholder='Enter New Password'
                  name='password'
                  value={userDetails.password}
                  onChange={changeHandler}
                 />
            </label>
            <button>Submit</button>
        </form>
    
    </div>
  )
}

export default SignupForm