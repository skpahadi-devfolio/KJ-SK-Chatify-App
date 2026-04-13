import {io} from "socket.io-client";
import { useState, useEffect, useRef } from 'react'
import { FaRocketchat } from 'react-icons/fa'
import { LuSend } from 'react-icons/lu'
import { ToastContainer, toast } from 'react-toastify'
import { chatboxMessage, getMessages, getsingleUser } from '../services/chatboxServices.js'
import { useParams } from 'react-router-dom'

const Chatbox = () => {
  
  const [message, setmessage] = useState("")
  const [messages, setmessages] = useState([])
  const socketRef = useRef(null);               //this is for instant message
  const [currentUserId, setCurrentUserId] = useState(null)
  
  // this is for dynamic routing chatbox open
  const { user_id } = useParams();
  
  //open chat by users id with image and name logic
  const [user, setuser] = useState(null)
  
  //useffect for socketRef.current sender part:-
  useEffect(() => {
   socketRef.current = io("http://localhost:3000");
    socketRef.current.on("connect", () => {
      console.log("Socket Connected:", socketRef.current.id);
      // toast.success("User Connected", socketRef.current.id);
    });
    
    return () => socketRef.current.disconnect();
  }, []);
  
  
  //useeffect for socket receiver part:-
  useEffect(() => {
    if(!socketRef.current){
      return;
    }
    socketRef.current.on("receive_message", (data) => {
      setmessages((prev) => [...prev, data]);
    });
  }, []);
  


  //useffect for two user room join secure their messages from third person:-
  useEffect(() => {
    if(!socketRef.current || !currentUserId || !user_id){
      return;
    }
    const roomId = currentUserId < user_id ? `${currentUserId}_${user_id}` : `${user_id}_${currentUserId}`;
    socketRef.current.emit("join_room", roomId);
    
    // console.log("Joined Room:", roomId);
  }, [currentUserId, user_id]);
  

  useEffect(() => {
  try {
    const userData = localStorage.getItem("user");

    if (userData && userData !== "undefined") {
      const parsed = JSON.parse(userData);
      setCurrentUserId(parsed?._id);
    }
  } catch (err) {
    console.log("Invalid user data");
  }
}, []);



  useEffect(() => {
    //user fetch call
    if (!user_id) return;
    const fetchData = async () => {
      try {
        const userRes = await getsingleUser(user_id);
        if (!userRes.success) {
          toast.error(userRes.message);
        }
        else {
          setuser(userRes.user);
        }


        const msgRes = await getMessages(user_id);
        if (!msgRes.success) {
          toast.error(msgRes.message);
        }
        else {
          setmessages(msgRes.messages);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchData();
  }, [user_id]);
  const token = localStorage.getItem("token");
  // console.log("TOKEN:", token);

  const handleChange = (e) => {
    setmessage(e.target.value)
  }

  const handleClick = async () => {
    if (message.trim() === "") {
      toast.error("Enter a Message Please");
      return;
    }
    const newMessages = {
      message: message,
      sender: currentUserId,
      receiver: user?._id
    }
    try {
      // setmessages(prev => [...prev, {message: message, sender: "me"}]);
      const res = await chatboxMessage(newMessages);

      if (!res.success) {
        toast.error(res.message);
        return;
      }
      setmessages(prev => [...prev, res.chatMessage]);
      toast.success("Your Message sent successfully!");

      //socketRef.current emit add:-
      if (socketRef.current) {
      socketRef.current.emit("send_message", res.chatMessage);
    }
      setmessage("");
    } catch (error) {
      toast.error("Server error for sending message")
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-slate-950 overflow-hidden">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      {/* Main Content layer */}
      <div>
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
        {/* haeading layer */}
        <div className='flex justify-center items-center mx-auto md:text-4xl text-xl md:flex-row flex-col text-white md:gap-5 md:my-7'>
          <FaRocketchat /><span className='pacifico'>KJ&SK</span>Chatify App
        </div>


        {/* user profile design */}
        <div className='flex items-center justify-center flex-col gap-2 text-white'>
          <img className='h-10 w-10 rounded-full' src={user?.profile} alt="" />
          <p>{user?.name}</p>
        </div>

        {/* chat layer */}
        <div className="chat flex justify-center md:bg-gray-950 bg-slate-950 md:p-8 p-4 items-center fixed bottom-0 left-0 w-full gap-5">
          <input onChange={handleChange} value={message} className='bg-white p-4 md:w-[85vw] max-w-sm rounded-md outline-none' type="text" placeholder='Message' />
          <button onClick={handleClick} name='submit' className='text-2xl bg-green-600 p-4 rounded-xl' type="submit"><LuSend /></button>
        </div>


        {/* display the message on screen */}
        <div className='flex flex-col gap-2 p-4 md:mx-14 pb-24 mb-20'>
          {messages?.map((msg, index) => {
            const isSender =
    String(msg.sender?._id || msg.sender) === String(currentUserId);
            return <div key={index} className={`messages p-4 px-3 w-[50vw] md:max-w-[15vw] rounded-md ${isSender ? "ml-auto bg-green-500 text-black" : "mr-auto bg-blue-950 text-white"}`}>
              {msg.message}
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Chatbox
