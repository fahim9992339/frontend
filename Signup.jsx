import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
const Signup = ()=>{
    // initialize the state here 
    const [Username, setUsername]= useState('')
    const [Email, setEmail]= useState('')
    const [Password, setPassword]= useState('')
    const [Phonenumber, setPhonenumber]= useState('')

    // we want to have 3 state for posting data 
    // We have rge following
        const[loading, setloading]= useState("")
        const[error, setError]= useState("")
        const[success, setSuccess]= useState("")
        
        // we want to have a function To post data
        
        // Our Signup will contain the following data 
        
        // Username , Password , Email , Phonenumber
        
        const submit = async (e)=>{
            // we want to prevent the browser 
            e.preventDefault()
            // console.log("Posting data")
            // we want to have a try and catch 
            try {
                // this works if we manage to post 
                setloading("Please wait while we post data")
                // get the user input from the form
                // we are going to use form data and apend the following 
                // Username , password , Email ,  Phonenumber
                const data = new FormData()
                data.append("username", Username)
                data.append("password",  Password)
                data.append("email", Email)
                data.append("phone", Phonenumber)

                // now we can post the data 
                // we will use axios package
                // it come with http request methods such as POST, GET, PUT, DELETE.
                const response =await axios.post("https://Fahim999gt.pythonanywhere.com/api/signup", data)
                // console.log(response)
                setSuccess(response.data.message)
                setloading()
            } catch (error) {
                // this works if there is an error eg network error or a bad request
                setloading("")
                setError(error.message)
            }
        }
    return(
     <div className="row justify-content-center mt-4">
        <div className="card shadow col-md-6 p-4">
            <h1 className="text-center"><b><h1>Sign Up</h1></b></h1>
            {/* bind loading  */}
            <h1 className="text-warning">{loading}</h1>
            {/* bind success */}
            <h1 className="text-success">{success}</h1>
            <form onSubmit={submit}>
                {/* bind error  */}
                <h1 className="text-danger">{error}</h1>
                <input type="text" placeholder="Enter Username" className="form-control" onChange={(e)=>setUsername(e.target.value)}/> 
                <br /><br />
                {/* bind Username */}
                {Username}
                <input type="email" placeholder="Enter Email" className="form-control" 
                onChange={(e)=>setEmail(e.target.value)}/>
                <br /><br /> 
                {/* bind email */}
                {Email}
                <input type="password" placeholder="Enter Password" className="form-control"
                onChange={(e)=>setPassword(e.target.value)}/>
                <br /><br /> 
                {/* bind password  */}
                {Password}
                <input type="number" placeholder="Enter Phone Number" className="form-control" onChange={(e)=>setPhonenumber(e.target.value)} />
                <br /><br />
                {/* bind phone number  */}
                {Phonenumber}
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                <br />
                <p>Already have an account ? <Link to='/signin'>Sign in</Link></p>
            </form>
        </div>
     </div>   
    )
}
export default Signup