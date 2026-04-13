import { useForm } from "react-hook-form"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import { NavLink } from "react-router-dom"
import { signupuser } from "../services/authServices.js"
import { toast } from "react-toastify"
import { ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Signup = () => {

  const navigator = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = async(data) => {
    // console.log("Clieck ho gya", data)
    
    try {
      const result = await signupuser(data);
      if(!result.success){
       toast.error(result.message);
       return
      }
      localStorage.setItem("token", result.token)
      toast.success(result.message);
      navigator('/login')
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div className="min-h-screen flex flex-col w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
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

          <h2 className="text-center my-6 md:text-3xl text-2xl font-bold">Signup To <span className="pacifico">KJ&Sk</span> Chatify App</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-950 md:p-7 p-4 text-white flex flex-col rounded-xl mx-auto md:w-[36vw] w-[92vw] mb-24  gap-5" action="">
            {/* your name */}
            <div>
            <label htmlFor="name">Name</label>
            <input className="bg-white text-black rounded-md p-4 w-full" type="text" name='name' placeholder='Enter name' {...register("name", { required: true , minLength:{value: 3, message:"Minimum 3 Length required for Name"}})} />
            {errors.name && <div className="text-white">{errors.name.message}</div>}
            </div>

            {/* your email */}
            <div>
            <label htmlFor="email">Email</label>
            <input className="bg-white text-black rounded-md p-4 w-full" type="email" name="email" placeholder="Enter your Email" {...register("email", { required: true , minLength:{value: 3, message:"Minimu 3 Length required"}, maxLength:{value: 25, message:"Maximum 25 Length is available"}})} />
            {errors.email && <div className="text-white">{errors.email.message}</div>}
            </div>

            {/* your password */}
            <div>
            <label htmlFor="password">Password</label>
            <input className="bg-white text-black rounded-md p-4 w-full" type="password" name="password" placeholder="Enter your Password" {...register("password", { required: true , minLength:{value: 3, message:"Minimu 3 Length required"}, maxLength:{value: 20, message:"Maximum 20 Length is available"}})} />
            {errors.password && <div className="text-white">{errors.password.message}</div>}
            </div>


            {/* confirm password */}
            <div>
            <label htmlFor="confirmpassword">Confirmpassword</label>
            <input className="bg-white text-black rounded-md p-4 w-full" type="password" name="confirmpassword" placeholder="Re-Confirmpassword" {...register("confirmpassword", { required: true , minLength:{value: 3, message:"Minimu 3 Length required"}, maxLength:{value: 20, message:"Maximum 20 Length is available"}})} />
            {errors.confirmpassword && <div className="text-white">{errors.confirmpassword.message}</div>}
            </div>


            {/* signup button */}
            <div>
              <button className="p-4 rounded-md w-full bg-blue-900" type="submit">Signup</button>
            </div>
            
            <div className="flex justify-center items-center gap-5">
              <input type="checkbox" name="check" id="check" />
              <p>Already have an account? <NavLink className="underline text-blue-900" to={"/login"}>Login</NavLink></p>
            </div>
          </form>

          <Footer/>
        </div>
  )
}

export default Signup
