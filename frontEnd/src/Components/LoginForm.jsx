
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import axios from "axios";


const LoginForm = ({setUser, user}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const navigate = useNavigate()
      const onSubmit = async (data) => {
        try { 
           const user = (await axios.post('http://localhost:3001/login', data)).data
           setUser(user)
           console.log(user)

           navigate('/')
        }
        catch(e){
        console.log(e)
        }
      }

    return (
        <div className="flex items-center justify-center ">
    <div className="px-8 py-6 mt-2 text-left bg-white shadow-lg md:w-2/3 lg:w-2/3 sm:w-2/3">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
                <div>
                    <label className="block" for="email">Email</label>
                            <input type="text" placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                {...register("email")}/>
                </div>
                <div className="mt-4">
                    <label className="block">Password</label>
                            <input type="password" placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                {...register("password")}/>
                </div>
                <div className="flex items-baseline justify-between">
                    <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                    <Link to="/register">
                    <a  className="text-sm text-blue-600 hover:underline">Pas inscrit ?</a>
                    </Link>
                </div>
            </div>
        </form>
    </div>
</div>
    );
};

export default LoginForm;