import React from 'react';
import Signup from './Signup';

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-slate-300">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div><p>Don't have an account?
          {/* You can open the modal using ID.showModal() method */}
<div className="text-blue-400" onClick={()=>window.my_modal_3.showModal()}> <button class="text-blue-500 background-transparent" type="button">
  Login Now!</button> </div>
<dialog id="my_modal_3" className="modal">
  <form method="dialog" className="modal-box">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <Signup></Signup>
  </form>
</dialog>
           </p></div>
      </div>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default Login;