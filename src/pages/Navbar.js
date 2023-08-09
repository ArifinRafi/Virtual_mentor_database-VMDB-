import React from 'react';
import {Link} from 'react-router-dom'
import {FaBeer} from 'react-icons/fa';

const Navbar = () => {
    
    return (
        
            <div className=" bg-opacity-40 top-0 z-50 backdrop-blur-lg rounded shadow-2xl w-full   navbar  text-white bg-gradient-to-r fixed grid grid-cols-3  from-purple-800/[0.8] to-red-600/[0.8] shadow-2xl ">
  <div>
  <Link to='/' className="btn btn-ghost normal-case text-xl">VMDB</Link>
  <Link to='/Home' className="btn btn-ghost normal-case">Home</Link>
  <Link to='/Login' className="btn btn-ghost normal-case">Login</Link>
  <Link to='/Profile' className="btn btn-ghost normal-case">Search</Link>
  
  </div>
  <form action="" className=''>
  <input type="text" placeholder="Search your mentor " className="input rounded-2xl input-bordered text-black w-full items-center"/>
  <div className='grid justify-items-end'>
  <button className='btn absolute bg-pink-600 text-white my-[-24px]'>Search</button>
  </div>
  </form>
</div>
        
    );
};

export default Navbar;