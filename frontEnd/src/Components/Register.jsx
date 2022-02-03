import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    await axios.post("http://localhost:3001/register", data);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-2/3 lg:w-2/3 sm:w-2/3">
        <h3 className="text-2xl font-bold text-center">Join us</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <div>
              <label className="block" for="Name">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("username")}
              />
            </div>
            <div>
              <label className="block" for="Name">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("email")}
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Confirm Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("password")}
              />
            </div>
            <span className="text-xs text-red-400">Password must be same!</span>
            <div className="flex">
              <button
                className="w-full px-6 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-blue-900"
                type="submit"
              >
                Create Account
              </button>
            </div>
            <div className="mt-6 text-grey-dark">
              Already have an account?
              <Link to="login">
                <a className="text-blue-600 hover:underline" href="#">
                  Log in
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
