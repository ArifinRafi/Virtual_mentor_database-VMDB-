import React from 'react';
import {Link} from 'react-router-dom'
import {useAuthUser} from 'react-auth-kit'
import {useIsAuthenticated} from 'react-auth-kit';
import {useSignOut} from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const isAuthenticated = useIsAuthenticated()
    const auth = useAuthUser()
    const signOut = useSignOut()
    const navigate = useNavigate()

    return (
        <div>
            <div className="navbar bg-gradient-to-r  from-purple-800 to-purple-600 shadow-2xl ">
  <Link to='/' className="btn btn-ghost normal-case text-xl">VMDB</Link>
  <Link to='/Home' className="btn btn-ghost normal-case">Home</Link>
  <Link to='/Login' className="btn btn-ghost normal-case"> {isAuthenticated() == true ? auth().email : 'Login' }</Link>
  <Link to='/Search' className="btn btn-ghost normal-case">Search</Link>
  {
    isAuthenticated() == true &&
    <button onClick={() => {signOut(); navigate('/Login')}} className="btn btn-ghost normal-case">Log Out</button>
  }
</div>
        </div>
    );
};

export default Navbar;