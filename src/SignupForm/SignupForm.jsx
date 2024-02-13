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

    const [error,setError] = React.useState({
        email:"",
        password:""
    })

    const isValidEmail = ()=>{
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(userDetails.email)
    }
    

    const changeHandler = (e)=>{
        setUserDetails({...userDetails,[e.target.name]:e.target.value})
     
        
        if (e.target.name === 'password') 
        {
            if (e.target.value.length < 8) 
            {
                setError({...error, password: "Password must be at least 8 characters"})
            } 
            
            else 
            {
                setError({...error, password: ""})
            }
        }

        else if(e.target.name === 'email' )
        {
            if(!isValidEmail()) 
            {
                setError({...error, email: "Enter a valid email address"})
            }
            else
            {
                setError({...error, [e.target.name]: ""})
            }

        }
        else {
            setError({...error, [e.target.name]: ""})
        }


    }


    

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("form submitted :",userDetails)
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
                  autoComplete="off"
                 />
            </label>

            {error.email && <p className="error-message">{error.email}</p>}

            <label htmlFor='name-field'>
                <input type='text' id='name-field'
                  placeholder='Enter Your Name'
                  name='name'
                  value={userDetails.name}
                  onChange={changeHandler}
                  autoComplete="off"
                 />
            </label>

            <label htmlFor='country-field'>
                <input type='text' id='country-field'
                  placeholder='Enter Your Country'
                  name='country'
                  value={userDetails.country}
                  onChange={changeHandler}
                  autoComplete="off"
                 />
            </label>

            <label htmlFor='age-field'>
                <input type='number' id='age-field'
                  placeholder='Enter Your Age'
                  name='age'
                  value={userDetails.age}
                  onChange={changeHandler}
                  autoComplete="off"
                 />
            </label>

            <label htmlFor='password-field'>
                <input type='password' id='password-field'
                  placeholder='Enter New Password'
                  name='password'
                  value={userDetails.password}
                  onChange={changeHandler}
                  autoComplete="off"
                 />
            </label>
            {error.password && <p className="error-message">{error.password}</p>}

            <button disabled={!isValidEmail() || userDetails.password.length < 8}>Submit</button>
        </form>
    
    </div>
  )
}

export default SignupForm