import { useForm } from 'react-hook-form'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ToastContainer, toast } from 'react-toastify'
import { contactMessage } from '../services/contactServices.js'

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  // const delay = async (d) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, d * 1000);
  //   })
  // }
  const onSubmit = async(data) => {
    try{
        const result = await contactMessage(data);
        if(!result.success){
        toast.error(result.message);
        return;
        }
        toast.success(result.message);
        reset();
      }
     catch (error) {
       toast.error(error.message);
    }
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className="relative min-h-screen w-full bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_200px_at_50%_200px,#3e3e3e,transparent_0)] z-0"></div>

        <div className='relative'>

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

        {/* heading */}
        <h1 className='text-4xl text-white text-center my-12'>Contact Us</h1>

        {/* description */}
        <p className='bg-slate-800 mx-auto p-6 py-12 w-[90vw] max-w-xl rounded-xl shadow-lg shadow-blue-900'>Have a question or feedback? We'd love to hear from you.
          Fill out the form below and we'll get back to you soon.</p>


        {/* contact-form */}
          {/* {isSubmitting && <div className='text-3xl text-white my-6 animate-spin bg-black rounded-full border-4 border-white p-4 py-10 w-[6vw] max-w-base mx-auto'>Loading</div>} */}
        <form className='flex flex-col gap-5 mx-auto w-[95vw] max-w-xl my-16 bg-violet-950 rounded-xl p-6 mb-24' onSubmit={handleSubmit(onSubmit)} action="">
          <input className='bg-white p-4 rounded-md' type="text" placeholder='Enter your Name' {...register("name", { required: true, minLength: { value: 5, message: "Minimum Length Required 5 in name" } })} />
          {errors.username && <div className='text-white'>{errors.username.message}</div>}
          <input className='bg-white p-4 rounded-md' type="email" placeholder='Enter your Email' {...register("email", { required: true, minLength: { value: 5, message: "Minimum Length Required 3 in name" }, maxLength: { value: 25, message: "Maximum Length is available 25 with special character" } })} />
          {errors.email && <div className='text-white'>{errors.email.message}</div>}
          <textarea className='bg-white p-4 rounded-md' name="messages" id="messages" placeholder='Enter your Message' {...register("message", { required: true, minLength: { value: 5, message: "Minimum Length Required 3 in name" } })}></textarea>
          {errors.messages && <div className='text-white'>{errors.messages.message}</div>}
          <button disabled={isSubmitting} className='bg-blue-900 p-4 rounded-md' type="submit">Send Your Message</button>
        </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
