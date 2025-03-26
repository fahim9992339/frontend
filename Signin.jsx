import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const  Signin =()=>{
        const [email, setEmail] =useState("")
        const [password, SetPassword] =useState("")

        const[loading, setLoading] =useState("")
        const[error, setError] = useState("")
        const[success,setSuccess] = useState("")
        



        const submit = async(e)=>{
                   
            e.preventDefault ()

            setLoading ("please wait...")

            try{

                const data = new FormData ()
                data.append("email",email)
                data.append("password",password)

                const response= await axios.post("https://Fahim999gt.pythonanywhere.com/api/signin",data)

                setSuccess(response.data.message)
                setLoading("")

            } catch(error){
                setLoading("")
                setError(error.message)
            }

        }

        return (

            <div className="row justify-content-center mt-4">
                <div className="card shadow col-md-6 p-4">
                    <h1>Sign In</h1>
                       {/* bind loading  */}

            <h1 className="text-info">{loading}</h1>
            {/* bind success */}
            <h1 className="text-success">
               {success}
            </h1>
            {/* bind error  */}
               <h1 className="text-danger">{error}</h1>
                    <form onSubmit={submit}>
                        <input type="email" placeholder="Enter email" required className="form-control" onChange={(e)=>setEmail(e.target.value)} />
                        <br />
                        {/* bind email */}
                        {email}
                        <input type="password" placeholder="Enter password" required className="form-control" onChange={(e)=>SetPassword(e.target.value)} />
                        <br />
                        {/* bind password */}
                        {password}
                        <button type="submit" className="btn btn-primary w-100">Sign In</button>
                        <br /><br />
                        <p>Don't have an Account? <Link to='/signup'>Sign Up</Link></p>
                    





                    </form>





                </div>
                 
                  



            </div>
        )



}
export default Signin