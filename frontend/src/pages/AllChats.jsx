import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getSpecificUser, getallUser } from '../services/allChatsServices.js'
import { toast, ToastContainer } from 'react-toastify'

const AllChats = () => {

  const [users, setusers] = useState([])
  const [activeTab, setActiveTab] = useState('myChats')

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let res;
        if (activeTab === 'myChats') {
        res = await getSpecificUser(); // Active inbox users
      } else {
        res = await getallUser(); // Saare registered users (Logged-in user ko chhod kar)
      }
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
  }, [activeTab]);
  
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
        <div className="user flex justify-center items-center w-[92vw] max-w-3xl gap-2 mx-auto flex-col my-16 pb-20 md:cursor-pointer">
       {/* heading of this layout */}
       <p className='md:text-4xl text-2xl text-center text-white font-bold'>Your Chat List</p>
       {/* Tab Buttons for Switching Views */}
        <div className="flex pt-5 gap-4 mb-4 relative z-50">
          <button 
            onClick={() => setActiveTab('myChats')} 
            className={`px-4 py-2 rounded-lg font-bold ${activeTab === 'myChats' ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-300'}`}
          >
            My Chats
          </button>
          <button 
            onClick={() => setActiveTab('allUsers')} 
            className={`px-4 py-2 rounded-lg font-bold ${activeTab === 'allUsers' ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-300'}`}
          >
            + New Contact 
          </button>
        </div>
          {users.length === 0 ? (<p className='text-white'>No User Found</p>) : users.map((user,index) => {
            return <div key={user._id} className="border m-2 bg-gradient-to-r from-violet-900 to-slate-900 w-[94vw] max-w-xl p-5 rounded-xl shadow-lg shadow-blue-900">
              <div className="profile flex justify-between items-center ">
                <div className='flex md:gap-8 gap-3 justify-center items-center'>
                  <p>{index + 1}</p>
                  <img className='md:h-[15vh] h-[18vh] md:w-[7vw] w-[18vw] md:p-2 text-center rounded-full ' src={user.profile || "https://via.placeholder.com/150"} alt="srk img" />
                <p className='font-bold'>{user.name}</p>
                </div>
                <NavLink className={"text-blue-800 font-semibold underline"} to={`/chatbox/${user._id}`}>
                <button className='bg-green-500 border border-green-600 md:p-2 p-1 md:px-8 px-4 rounded-md shadow-2xl shadow-blue-800'>Chat</button></NavLink>
              </div>
            </div>
          })}

        </div>
          <Footer/>
        </div>
   
  )
}

export default AllChats
