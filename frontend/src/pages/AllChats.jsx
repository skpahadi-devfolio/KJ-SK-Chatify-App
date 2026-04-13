import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import srk from "../assets/srk.jpg"
import goljiyu from "../assets/goljiyu.jpg"
import bhairav from "../assets/bhairav.jpg"
import bmw from "../assets/bmw.jpg"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getallUser } from '../services/allChatsServices'
import { toast, ToastContainer } from 'react-toastify'

const AllChats = () => {

  const [users, setusers] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getallUser();
        if(!res.success){
          toast.error(res.message)
          return 
        }
        // toast.success(res.message);
        setusers(res.users);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchUser();
  }, []);
  
  return (
      <div className="relative min-h-screen w-full bg-slate-950 overflow-hidden">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        
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

        {/* users list */}
        <div className="user flex justify-center items-center w-[92vw] max-w-3xl gap-2 mx-auto flex-col my-16 pb-20 cursor-pointer">
       {/* heading of this layout */}
       <p className='md:text-4xl text-2xl text-center text-white font-bold'>Your Chat List</p>
          {users.length === 0 ? (<p className='text-white'>No User Found</p>) : users.map((user,index) => {
            return <div key={user._id} className="border-2 m-2 bg-violet-700 w-[94vw] max-w-xl p-5 rounded-xl">
              <div className="profile flex justify-between items-center">
                <div className='flex gap-8 justify-center items-center'>
                  <img className='md:h-[15vh] h-[22vh] md:w-[7vw] w-[20vw] md:p-2 text-center rounded-full ' src={user.profile || "https://via.placeholder.com/150"} alt="srk img" />
                <p className='font-bold'>{user.name}</p>
                </div>
                <NavLink className={"text-blue-900 font-bold underline"} to={`/chatbox/${user._id}`}>
                <button className='bg-green-500 border border-green-600 md:p-2 p-1 rounded-md shadow-2xl shadow-blue-800'>Open Chat</button></NavLink>
              </div>
            </div>
          })}

        </div>
          <Footer/>
        </div>
   
  )
}

export default AllChats
