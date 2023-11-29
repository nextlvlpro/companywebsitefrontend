import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Toast } from 'flowbite-react';

export default function Register() {
    const [otp, setOtp] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [reqOtp, setreqOtp] = useState(false)
    const [otpConfirmation, setOtpConfirmation] = useState(false)
    const [otpConfirmed, setOtpConfirmed] = useState(false)
    const [showToast, setShowToast] = useState(false);
    const [genratedOtp, setGenratedOtp] = useState(null);

    const navigate = useNavigate('')

    //email verification

    function handleEmailVerify(e) {
        e.preventDefault()

        if (!email) {
            return setShowToast('Enter Valid Email')
        }

        axios.post('/register', { email, otpConfirmation }).then(({ data }) => {
           
            if (data == 'ok') {
                setOtpConfirmation(true)
                setreqOtp(true)
                setShowToast("Email Vefrifyed, Now Request OTP")
            } else {
                setShowToast(data)
            }
        })

    }

    // req otp 
    function reqTheOtp(e) {
        e.preventDefault()
        axios.post('/register', { email, reqOtp }).then((res) => {
            if(res.data) {
               
                setShowToast(`OTP is Sent to your Email`)
                setGenratedOtp(res.data)
                localStorage.setItem('Otp',res.data)
            }else {
                setShowToast(`failed`)
            }
        })
    }

    // otp confirmation
    function finalOtpConfrm(e) {
        e.preventDefault()
        setOtpConfirmation(true)

        axios.post('/register', { email, otp, otpConfirmation,genratedOtp }).then((res) => {
            if (res.data == 'otp confiremed') {
                setOtpConfirmed(true)
                setreqOtp(false)
                setShowToast('OTP Confirmed, Now set password and Register')
            } else if (res.data == 'wrong otp') {
                setShowToast('Wrong OTP')
            }
        })
    }

    //otp confriemd, register
    function handleRegister(e) {
        e.preventDefault()

        if (!email || !password || !confirmPassword) {
            return setShowToast('fill all the fields')
        }

        if (password != confirmPassword) {
            return setShowToast('Password do not Match')
        }

        axios.post('/register', { email, password, otpConfirmed }).then((res) => {

            if (res.data == 'registered') {
                navigate('/login')
                setShowToast('Registration Complete, Now Login')
            } else {
                setShowToast(res.data)
            }
        })

    }
    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        MEDPL
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form className="space-y-4 md:space-y-6">

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your email registered with MEDPL" required="" />
                                </div>
                                {!otpConfirmation && (
                                    <button type="submit"
                                        onClick={handleEmailVerify}
                                        className="registerButton w-full text-white bg-primary-600 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:text-white">
                                        Confirm
                                    </button>
                                )}

                                {reqOtp && (
                                    <>
                                        <div>
                                            <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter OTP</label>
                                            <input
                                                type="text"
                                                name="otp"
                                                id='otp'
                                                value={otp} onChange={(e) => setOtp(e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter Otp" required="" />
                                        </div>
                                        <button type="submit"
                                            onClick={reqTheOtp}
                                            className="registerButton w-full text-white bg-primary-600 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:text-white">
                                            Request OTP
                                        </button>
                                        <button type="submit"
                                            onClick={finalOtpConfrm}
                                            className="registerButton w-full text-white bg-primary-600 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:text-white">
                                            Confirm OTP
                                        </button>
                                    </>
                                )}

                                {otpConfirmed && (
                                    <>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password"
                                                name="password"
                                                id="password"
                                                placeholder="••••••••"
                                                value={password} onChange={(e) => setPassword(e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        </div>
                                        <div>
                                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                            <input type="password"
                                                name="confirm-password"
                                                id="confirm-password"
                                                placeholder="••••••••"
                                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        </div>


                                        <button type="submit"
                                            onClick={handleRegister}
                                            className="registerButton w-full text-white bg-primary-600 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:text-white">
                                            Register
                                        </button>
                                    </>
                                )}



                                <p className="text-sm font-light text-black dark:text-gray-400">
                                    Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500"><span className='underline text-lg text-blue-500'>Login</span></Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {!!showToast && (
                <div className='absolute top-5 right-6 shadow-md'>

                    <Toast>
                        <div className=' flex items-center justify-center gap-2 z-50'>
                            {showToast}
                            <Toast.Toggle onDismiss={() => setShowToast(false)} />
                        </div>
                    </Toast>
                </div>

            )}
        </div>
    )
}
