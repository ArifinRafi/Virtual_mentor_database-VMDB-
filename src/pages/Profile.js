import React from 'react';
import mahbub from '../images/mahbub.jpg'
import '../css/Profile.css'
import Navbar from './Navbar';
import Mentor from './Mentor';
import { Link } from 'react-router-dom';
const Profile = () => {
    return (
        <div className='h-screen bg-white'>
           <div className='grid lg:grid-cols-3 hover:bg-slate-200 bg-slate-100 border-rounded profile-section mx-auto'>
            <img src={mahbub} className='rounded-3xl w-64 lg:w-32 m-12 ' alt="" />

            <div>
                <h1 className=' text-2xl font-bold grid align-items-center mt-16'>Mahbub Ul Haque</h1>
                <p>Department: CSE</p>
                <p className='font-bold' >Lecturer, Brac University</p> 
            </div>
            <Link to='/Mentor' className='btn btn-primary mt-20 mx-10'>View Profile</Link>

           </div>
           

        </div>
    );
};

export default Profile;