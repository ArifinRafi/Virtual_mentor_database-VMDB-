import React from 'react';
import dp from '../images/mahbub.jpg'
import YouTube from 'react-youtube'
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';



const Mentor = () => {
    // const videoId = 'xNRJwmlRBNU';
    const videoId = ['xNRJwmlRBNU', '8hly31xKli0'];
    return (
        <div>
            <div className='grid grid-cols-2 my-36 mx-24 '>
            <img src={dp} className='' alt="" />
        <div>
        <h1 className=' text-2xl font-bold grid align-items-center mt-32'>Mahbub Ul Haque</h1>
                <p>Department: CSE</p>
                <p className='font-bold' >Lecturer, Brac University</p> 

       <span className=' font-semibold'>Education:  
        Dhaka University</span> <br />
        <span className=' font-semibold'>Research Area: Ai, Robotics </span> 
        <p>Email: abc@mail.com <br />
        Contact: 0182343434</p>
        
        
        
       <div className='grid justify-items-center my-8'>
        <Rating></Rating>
       </div>
       <button className='btn btn-primary'>Contact for Research intereset</button>
        </div>
            </div>

            <div className='grid justify-items'>
            <h1 className='text-2xl font-bold'>
                Sample Recorded Classes
            </h1>
            <div className='flex my-12 justify-center'
            > {videoId.map(videoId => (
                <YouTube key={videoId} videoId={videoId} className='mx-12' ></YouTube>

            ))}
                
            </div>
            </div>


            <form className='flex mx-36 my-12'>
            <textarea className="textarea border-black w-96 h-44" placeholder="Write comments here"></textarea>
            <button className='btn btn-primary mx-8'>Post</button>
            </form>
            
            <div className='py-12'>
                <Link to='/Login' className='btn btn-primary'> Enroll full courses here</Link>
            </div>
        </div>
    );
};

export default Mentor;