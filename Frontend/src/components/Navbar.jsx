import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setshowMenu] = useState(false)
    const [token, settoken] = useState(true)
    return (

        <div className='flex item-center justify-between text-sm font-bold py-4  border-b '>
            <img className='w-40 curser-pointer' src={assets.logo} />
            <ul className=' flex  item-center mt-4  text-sm  gap-6'>

                <NavLink to='/'>
                    <li>HOME</li>

                </NavLink>

                <NavLink to='/doctors'>
                    <li>All DOCTORS</li>
                </NavLink>

                <NavLink to='/contact'>
                    <li>CONTACT</li>
                </NavLink>

                <NavLink to='/about'>
                    <li>ABOUT</li>
                </NavLink>
            </ul>
            <div className='flex item-center gap-4'>
                {
                    token ?
                        <div className='flex item-center gap-2  cursor-pointer group relative'>
                        <img className='w-7 rounded-full' src={assets.profile_pic}></img>
                        <img  className='w-2'src={assets.dropdown_icon}></img>
                        <div>
                            <div className='absolute top-0 right-0 pt-14 text-base z-20 hidden group-hover:block'>
                                <p onClick={() => navigate('/myprofile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={() => navigate('/myappointment')} className='hover:text-black cursor-pointer'>MyAppointments</p>
                                <p onClick={()=>settoken(false)}className='hover:text-black cursor-pointer'>Logout</p>
                            </div>

                        </div>
                        </div>
                    :<button onClick={() => navigate('/login')} className='bg-violet-800 rounded-full text-white text-md font-bold mr-6 p-3'>Create Account</button>
                }
                
            </div>

        </div>
    )
}

export default Navbar