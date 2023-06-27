import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-gradient-to-r  from-purple-800 to-purple-600 shadow-2xl ">
  <Link to='/' className="btn btn-ghost normal-case text-xl">VMDB</Link>
  <Link to='/Home' className="btn btn-ghost normal-case">Home</Link>
  <Link to='/Login' className="btn btn-ghost normal-case">Login</Link>
  <Link to='/Search' className="btn btn-ghost normal-case">Search</Link>
</div>
        </div>
    );
};

export default Navbar;