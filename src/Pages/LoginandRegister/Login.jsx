import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../../UserContext'
import { Toast } from 'flowbite-react';
import Cookies from 'js-cookie';

export default function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate('')
    const {setUser, setAdmin, admin} = useContext(UserContext);
    const [showToast, setShowToast] = useState(false);
   
    
    
    
    async function handleRegister(e) {
        e.preventDefault()
        if (email == '' || password == '') {
            alert("Please Fill all the field")
        } else {
            
            try {
                const userInfo = await axios.post('/login', { email, password })
                  

                    if (userInfo.data.email == email) {
                        setUser(userInfo.data);
                        

                        let theUserData = Object.entries(userInfo.data)
                        
                        theUserData.map((items)=> localStorage.setItem(items[0], items[1]))

                        if (userInfo.data.email === 'bhanusharma089@gmail.com') {
                            setAdmin(true)
                        }
                        
                        setShowToast("Login Done")

                        setTimeout(() => {
                            
                            navigate('/')
                        }, 1000);

                    } else if (userInfo.data == 'user Does not exist') {
                        setShowToast(userInfo.data)
                    } else if (userInfo.data == "password incorrect") {
                        setShowToast('Wrong Password')
                    }
                    else {
                        setShowToast('Login Failed')
                    }   
            }
            catch (e) { setShowToast('Failed') }
        }
    }
   

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link to="" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        MEDPL
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>

                                <button type="submit"
                                    onClick={handleRegister}
                                    className="w-full text-black bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:text-blue-200">
                                    <span>Login</span>
                                </button>
                                <p className="text-sm font-light text-black dark:text-gray-400">
                                    Don't Have account? <Link to="/register" className="font-medium text-black hover:underline dark:text-primary-500"><span className='underline text-lg text-blue-500'>Register</span></Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {!!showToast && (
                <div className='absolute top-5 right-6 shadow-md'>

                    <Toast>
                        <div className=' flex items-center justify-center gap-2 z-50 text-blue-500 font-semibold'>
                            {showToast}
                            <Toast.Toggle onDismiss={() => setShowToast(false)} />
                        </div>
                    </Toast>
                </div>

            )}
        </div>
    )
}
