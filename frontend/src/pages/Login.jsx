import { useForm } from 'react-hook-form'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import { loginuser } from '../services/authServices.js'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigator = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = async(data) => {
    try {
      const result = await loginuser(data);
      if(!result.success){
      toast.error(result.message);
      return;
    }
    localStorage.setItem("token", result.token);
    localStorage.setItem("user", JSON.stringify(result.user));
    // console.log("LOGIN RESULT:", result);
    navigator('/allchats');
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <div className='relative min-h-screen flex flex-col'>
      <div className="absolute min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <Navbar/>

       <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        {/* Heading Layer */}
        <h1 className='my-10 text-center font-bold text-3xl text-white'>Login <span className='pacifico'>KJ&Sk</span> Chatify App</h1>
        {/* Login Page Layer */}
        <form className='flex gap-7 flex-col mx-auto max-w-lg md:p-8 p-4 rounded-xl w-[93vw] bg-gray-950 my-5 text-white mb-24' onSubmit={handleSubmit(onSubmit)} action="">
           
           {/* Email Layer */}
          <div>
          <label htmlFor="email">Email</label>
          <input className='bg-white w-full text-black p-4 rounded-md outline-none' type="email" placeholder='Enter your Email' {...register("email", { required: true , minLength:{value: 3, message: "Minimum 3 Length is Required"}, maxLength:{value: 25, message: "Maximum 25 Length is Available"}})} />
          {errors.email && <div className='text-white'>{errors.email.message}</div>}
          </div>

          {/* Password Layer */}
          <div>
          <label htmlFor="password">Password</label>
          <input className='bg-white w-full text-black p-4 rounded-md outline-none' type="password" placeholder='Enter your Password' {...register("password", { required: true , minLength:{value: 3, message: "Minimum 3 Length is Required"}, maxLength:{value: 25, message: "Maximum 25 Length is Available"}})} />
          {errors.password && <div className='text-white'>{errors.password.message}</div>}
          </div>

          {/* Button Layer */}
          <div>
            <button className='bg-blue-900 w-full text-black p-4 rounded-md outline-none' type="submit">Login</button>
          </div>

          <div className='flex justify-center items-center gap-4'>
            <p>Don't have an account? <NavLink className="underline text-blue-900" to={"/signup"}>Signup</NavLink></p>
          </div>
        </form>

        <Footer/>
      </div>
    </div>
  )
}

export default Login
