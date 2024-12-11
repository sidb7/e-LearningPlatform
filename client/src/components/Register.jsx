
import { GiIceCube } from "react-icons/gi"
import "../index.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Alert from '@mui/material/Alert';

function Login() {

    const [email, setemail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [successsMessage, setSuccessMessage] = useState('')
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        setError('')
        // console.log(email,"USERNME")
        try {
            const response = await fetch("https://localhost:3001/auth/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username,email, password })

            })
            // console.log( email,"  ",password,"RESPONSE")
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                localStorage.setItem('tokenData', JSON.stringify(data))
                setSuccessMessage("Registered successfully")
                setTimeout(()=>{
                    navigate("/login")
                },1000)

            }
            else {
                const errData = await response.json()
                console.log(errData,"ERROROROR")
                setError(errData.message || "Login Failed")

            }
        } catch (err) {
            setError('Something went wrong. Please try again later.');
        }
    }
    return (
        <>
            {/* {error&& <Alert severity="error">{error}</Alert>} */}
            <div className="loginContainer flex justify-center items-center h-svh bg-gray-200">

                <div className="login-box h-5/6 w-4/6 flex border rounded-2xl p-2  bg-white shadow-xl shadow-gray-500">
                <div className="login-img px-4 my-auto w-full    justify-center items-center ">
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

                                <GiIceCube size={33} color="purple"/>
                                <span class="self-center text-lg font-bold text-black sm:text-2xl whitespace-nowrap">&nbsp;Grad<span className="text-pink-600">e</span>l</span>
                            </a>
                                    <h2 class="mt-1 text-center text-2xl/9 font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500 ">Create an account</h2>
                                </div>

                                <div class="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                                    <form class="space-y-3" onSubmit={handleRegister}>
                                        <div>
                                            <label for="email" class="block text-sm/6 font-medium text-gray-900">Your email</label>
                                            <div className="mt-1">
                                                <input type="email"
                                                    value={email}
                                                    onChange={(e) => setemail(e.target.value)}
                                                    required name="email" id="email" autocomplete="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-violet-600 sm:text-sm/6" />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="username" class="block text-sm/6 font-medium text-gray-900">Username</label>
                                            <div class="mt-1">
                                                <input type="text"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    required name="username" id="username" autocomplete="username" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-violet-600 sm:text-sm/6" />
                                            </div>
                                        </div>

                                        <div>
                                            <div class="flex items-center justify-between">
                                                <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                                                <div class="text-sm">
                                                    <a href="#" class=" text-violet-600 hover:text-pink-500">Forgot password?</a>
                                                </div>
                                            </div>
                                            <div class="mt-1">
                                                <input type="password" name="password" id="password" onChange={(e) => { setPassword(e.target.value) }} autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-violet-600 sm:text-sm/6" />
                                            </div>
                                            {error && <p style={{ color: 'red', fontSize: "13px" }}>{error}</p>}
                                            {successsMessage&&  <p style={{ color: 'lightgreen', fontSize: "13px" }}>{successsMessage}</p>}
                                        </div>

                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-violet-300 rounded bg-violet-50 focus:ring-3 focus:ring-violet-300 dark:bg-violet-600 dark:border-violet-600 dark:focus:ring-violet-600 dark:ring-offset-violet-600" required=""/>
                                            </div>
                                            <div class="ml-3 text-sm">
                                                <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-violet-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                            </div>
                                        </div>

                                        <div>
                                            <button type="submit" class="flex w-full justify-center rounded-md  bg-gradient-to-r from-violet-600 to-pink-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:from-violet-500 hover:to-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  transition-all duration-400 ">Sign up</button>
                                        </div>
                                    </form>

                                    <p class="mt-1 text-center text-sm/6 text-gray-500">
                                        Already a member?
                                        <Link to={"/login"} class="font-semibold text-violet-600 hover:text-pink-500"> Sign in</Link>
                                    </p>
                                </div>
                            </div></>
                    </div>
                </div>
            </div>     </>
    )
}

export default Login