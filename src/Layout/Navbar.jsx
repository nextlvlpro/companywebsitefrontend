import React, { useContext } from 'react'
import logo from "./photos/logo.jpeg"
import { Link } from 'react-router-dom'
import { Dropdown } from 'flowbite-react';
import { UserContext } from '../UserContext'




export default function TheNavbar() {
  const { user, admin } = useContext(UserContext)


  return (

    <div className='flex gap-x-1 p-1 items-center justify-between bg-blue-500 rounded-b-md shadow-sm shadow-blue-800 md:px-20 px-5'>
      <Link to={'/'} className='pl-2 flex items-center justify-center text-white gap-x-3'>
        <img src={logo} className='h-8 rounded-md' alt="logo" />
        <div className='font-semibold text-white text-xl tracking-widest'>
          VIVO
        </div>
      </Link>

      <div className='flex gap-1 p-1 items-center justify-evenly'>
        <Dropdown label={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>}
          className='shadow-md shadow-blue-800'
          arrowIcon={false}>
          <Dropdown.Item>
            <Link to={'/'} className=''>Home</Link>
          </Dropdown.Item>
          <Dropdown.Divider className='bg-gray-400' />
          <Dropdown.Item>
            <Link to={'/onlysalequery'}>Know Your Sales</Link>
          </Dropdown.Item>
          <Dropdown.Divider className='bg-gray-400' />
          <Dropdown.Item>
            <Link to={'/contact'}>Contact</Link>
          </Dropdown.Item>
          <Dropdown.Divider className='bg-gray-400' />
        </Dropdown>

        <Dropdown label={!!user ? <>Logout</> : <>Login</>} className='shadow-md shadow-blue-800' arrowIcon={false}>
          {!!user && (
            <>
              <Dropdown.Item>
                {user.userName}
              </Dropdown.Item>
              <Dropdown.Divider className='bg-gray-400' />
              {!!admin && (
                <Dropdown.Item>
                  <Link to={'/adminpanal'}>Admin Panal</Link>
                </Dropdown.Item>
              )}
              <Dropdown.Item>
                <Link to={'/logout'}>Logout</Link>
              </Dropdown.Item>
            </>
          )}
          {!user && (
            <>
              <Dropdown.Item>
                <Link to={'login'}>Login</Link>
              </Dropdown.Item>
              <Dropdown.Divider className='bg-gray-400' />
              <Dropdown.Item>
                <Link to={'/register'}>Register</Link>
              </Dropdown.Item>
            </>
          )}
        </Dropdown>
      </div>

    </div>


  )
}