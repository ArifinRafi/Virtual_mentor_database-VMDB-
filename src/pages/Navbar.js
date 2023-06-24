import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-gradient-to-r  from-red-500 to-blue-700 shadow-2xl ">
  <Link to='/' className="btn btn-ghost normal-case text-xl">VMDB</Link>
  <Link to='/Home' className="btn btn-ghost normal-case">Home</Link>
  <Link to='/Login' className="btn btn-ghost normal-case">About</Link>
  <Link to='/Navbar' className="btn btn-ghost normal-case">Contact</Link>
</div>
        </div>
    );
};

export default Navbar;