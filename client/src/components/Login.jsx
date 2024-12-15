
import { GiIceCube } from "react-icons/gi"
import "../index.css"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Alert from '@mui/material/Alert';
import { ContextState } from "../ContextProvider";
import VerticalNav from "./VerticalNav";

function Login() {

    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [successMessage,setSuccessMessage] = useState('')
    const navigate = useNavigate()
    const {isAuthenticated,logout,login} = useContext(ContextState)
    useEffect(()=>{
        localStorage.removeItem("tokenData")
    },[])

    const handleLogin = async (e) => {
        e.preventDefault()
        setError('')
        // console.log(email,"USERNME")
        try {
            const response = await fetch("https://localhost:3001/auth/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })

            })
            // console.log( email,"  ",password,"RESPONSE")
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                localStorage.setItem('tokenData',JSON.stringify(data))
                setSuccessMessage("Logged in successfully")
                login()
                setTimeout(()=>{
                    navigate("/dashboard")
                },1000)
                
            }
            else {
                const errData = await response.json()
                // console.log(errData,"ERROROROR")
                setError(errData.message || "Login Failed")
                
            }
        } catch (err) {
            setError('Something went wrong. Please try again later.');
        }
    }
    return (
     <>
           {/* {error&& <Alert severity="error">{error}</Alert>} */}
           <VerticalNav/>
           {console.log(isAuthenticated,"AUUTHTH")}
        <div className=" flex justify-center items-center h-svh px-40">
              
         
                <div className=" px-4 my-auto w-full    justify-center items-center ">
                    <span class="font-medium text-wrap text-7xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500 ">
                        Knock, knock!
                    </span>
                    <p class="font-medium text-wrap text-9xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500 ">

                        Who’s there?

                    </p>
                    <p class="font-medium text-wrap text-6xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500 ">

                        A whole galaxy of possibilities!

                    </p>

                </div>
                <div className=" w-2/3 ">
                    <>
                        <div class="flex min-h-full flex-col justify-center px-6  lg:px-8">
                            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                                {/* <GiIceCube size={50} className="mx-auto my-0  " color="purple" /> */}
                                <a href="" class="flex justify-center">
                                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" /> */}
              
                            </a>
                                <h2 class="mt-2 text-center text-2xl/9 font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500 ">Sign in to your account</h2>
                            </div>

                            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form class="space-y-6" onSubmit={handleLogin}>
                                    <div>
                                        <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                                        <div class="mt-2">
                                            <input type="email"
                                                value={email}
                                                onChange={(e) => setemail(e.target.value)}
                                                required name="email" id="email" autocomplete="email"  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-violet-600 sm:text-sm/6" />
                                        </div>
                                    </div>

                                    <div>
                                        <div class="flex items-center justify-between">
                                            <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                                            <div class="text-sm">
                                                <a href="#" class="font-semibold text-violet-600 hover:text-pink-500">Forgot password?</a>
                                            </div>
                                        </div>
                                        <div class="mt-2">
                                            <input  type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}} autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-violet-600 sm:text-sm/6" />
                                        </div>
                                        {error && <p style={{ color: 'red' , fontSize:"13px"}}>{error}</p>}
                                        {successMessage && <p style={{ color: 'lightgreen' , fontSize:"13px"}}>{successMessage}</p>}

                                    </div>

                                    <div>
                                        <button type="submit" class="flex w-full justify-center rounded-md  bg-gradient-to-r from-violet-600 to-pink-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:from-violet-500 hover:to-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  transition-all duration-400 ">Sign in</button>
                                    </div>
                                </form>

                                <p class="mt-10 text-center text-sm/6 text-gray-500">
                                    Not a member?
                                    <Link to={"/register"} class="font-semibold text-violet-600 hover:text-pink-500"> Sign up</Link>
                                </p>
                            </div>
                        </div></>
                </div>

        </div>     </>
    )
}

export default Login