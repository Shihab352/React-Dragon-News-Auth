import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Register = () => {

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);
      console.log(form.get('email'));
    }

    return (
        <div>
                <Navbar></Navbar>
            <h2 className="text-3xl text-center mt-10">Please Register</h2>

            <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
        <p className="text-center">Already have an account  <Link className="text-red-500 font-bold" to={'/Login'}>Login</Link></p> 
        </div>
    );
};

export default Register;