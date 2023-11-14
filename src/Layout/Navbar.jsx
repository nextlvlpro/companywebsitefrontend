import React, { useContext } from 'react'
import logo from "./photos/logo.jpeg"
import { Link } from 'react-router-dom'
import { Dropdown, Navbar} from 'flowbite-react';
import { UserContext } from '../UserContext'




export default function TheNavbar() {
  const { user, admin } = useContext(UserContext)


  return (
    <div className='bg-blue-500 rounded-b-lg'>
      <Navbar className='bg-blue-500 text-white rounded-b-lg'>
        <Navbar.Brand as={Link} to='/'>
          <img src={logo} className="mr-3 h-6 sm:h-9 rounded" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MEDPL</span>
        </Navbar.Brand>

        <div className='flex items-center justify-center gap-2'>
          <Navbar.Collapse>
            <Navbar.Link as={Link} to={'/'} className='text-white'>
              Home
            </Navbar.Link>
            <Navbar.Link as={Link} to={'/onlysalequery'} className='text-white'>
              Sale Query
            </Navbar.Link>
            <Navbar.Link as={Link} to={'/contact'} className='text-white'>
              Contact
            </Navbar.Link>
          </Navbar.Collapse>

          <div className='sm:hidden bg-none'>
            <Dropdown arrowIcon={false}
              label={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>}
              dismissOnClick={true}
              className='z-50'>
              <Dropdown.Item as={Link} to={'/'}>
                Home
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={'/onlysalequery'}>
                Sale Query
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={'/contact'}>
                Contact
              </Dropdown.Item>
            </Dropdown>
          </div>

          <div className='mx-2'>
            <Dropdown label={!!user ? <>Logout</> : <>Log in</>} dismissOnClick={true} className='z-40'>

              <Dropdown.Item as={Link} to={'/login'}>
                {user && admin && (
                  <>
                    <Link to={'/adminpanal'}>Admin Panal</Link>
                  </>
                )}
              </Dropdown.Item>
              {!!user && (
                <Dropdown.Item as={Link} to={'/logout'}>
                  Log Out
                </Dropdown.Item>
              )}

              {!user && (
                <Dropdown.Item as={Link} to={'/login'}>
                  Log in
                </Dropdown.Item>
              )}

              {!user && (
                <Dropdown.Item as={Link} to={'/register'}>
                    Register
                </Dropdown.Item>
              )}
              {!!user && (
                <>
                  <Dropdown.Divider className='bg-gray-400' />
                  <Dropdown.Item>
                    {user.userName}
                  </Dropdown.Item>

                </>
              )}
            </Dropdown>

          </div>
        </div>
      </Navbar>
    </div>
  )
}