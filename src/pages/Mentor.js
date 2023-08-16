import React from 'react';
import dp from '../images/mahbub.jpg'
import YouTube from 'react-youtube'
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';



const Mentor = () => {
    const videoId = 'https://www.youtube.com/watch?v=xNRJwmlRBNU';
    return (
        <div>
            <div className='grid grid-cols-2 my-36 mx-24 '>
            <img src={dp} className='' alt="" />
        <div>
        <h1 className=' text-2xl font-bold grid align-items-center mt-32'>Mahbub Ul Haque</h1>
                <p>Department: CSE</p>
                <p className='font-bold' >Lecturer, Brac University</p> 

       <span className='text-2xl font-semibold'>Education:  
        Dhaka University</span> <br />
        <span className='text-2xl font-semibold'>Research Area:  
        <span className='text-xl'>Ai, Robotics</span></span>
       <div className='grid justify-items-center my-8'>
        <Rating></Rating>
       </div>
        </div>
            </div>

            <div className='grid justify-items'>
            <h1 className='text-2xl font-bold'>
                Sample Recorded Classes
            </h1>
            <div className='grid justify-items-center my-12'>
                <YouTube videoId={videoId}></YouTube>
            </div>

            </div>
            <form className='grid grid-cols-2 mx-36 my-12'>
            <textarea className="textarea border-black w-96 h-44" placeholder="Write comments here"></textarea>
            </form>
            <div className='py-12'>
                <Link to='/Login' className='text-xl '>Register <span className='text-blue-400'>here</span> For full Class</Link>
            </div>
        </div>
    );
};

export default Mentor;