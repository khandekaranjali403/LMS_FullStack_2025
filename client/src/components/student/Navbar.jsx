import React from 'react';
import { assets } from '../../assets/asset';
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';


const Navbar = () => {

    const isCourseListPage = location.pathname.includes('/course-list');


    const { openSignIn } = useClerk()

    const { user } = useUser()
    return (
        /*
        <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>*/
        <div className='header'>
            <img src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
            {/*
            <div className='navbar-links'>

                <button>Become Educator</button> |
                <Link to='/my-enrollments'>My Enrollments</Link>
            </div> */}




            <div className="navbar-links">
                {user &&
                    <>
                        <Link to="/educator" className="educator-link">Become Educator</Link>
                        <span className="separator">|</span>
                        <Link to="/my-enrollments" className="enrollments-link">My Enrollments</Link>
                    </>
                }
            </div>
            {user ? <UserButton /> :

                < button onClick={() => openSignIn()} className="create-account-btn">Create Account</button>}
            {/* for phone scrrens */}
            <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>

                <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
                </div>

                {
                    user &&
                    <>
                        <Link to="/educator" className="educator-link">Become Educator</Link>
                        <span className="separator">|</span>
                        <Link to="/my-enrollments" className="enrollments-link">My Enrollments</Link>
                    </>
                }

                {
                    user ? <UserButton />
                        :

                        <button onClick={() => openSignIn()} className="user-icon-button">
                            <img src={assets.user_icon} alt="User Icon" />
                        </button>

                }
            </div>
        </div>


    );
}


export default Navbar;
