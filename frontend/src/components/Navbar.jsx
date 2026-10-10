import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { jwtDecode } from 'jwt-decode';

const Navbar = () => {

  const navigate = useNavigate();

  const [MenuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);

  const ToggleMenu = () => {
    setMenuOpen(!MenuOpen);
  }

  //handle Logout function:-
  const HandleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  //useEffect for the refersh the button from logout to signup and login:-
  useEffect(() => {
    const checktoken = () => {
    const token = localStorage.getItem("token");

    if(!token){
      setloggedIn(false);
      return;
    }
    const decodedToken = jwtDecode(token);

    if(decodedToken.exp * 1000 > Date.now()){
      setloggedIn(true);
    }else{
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setloggedIn(false);
    }
  };
  checktoken();
  const interval = setInterval(checktoken, 1000);
  return () => clearInterval(interval); 
 }, []);

  return (
    <div>
      <nav className='bg-violet-950 p-6 flex justify-between items-center relative'>
        <div className="font-bold text-2xl md:px-20 pacifico "><NavLink to={"/"}>KJ&SK Chatify App</NavLink></div>


        {/* this is for desktop */}
        <ul className='flex flex-col md:flex-row md:gap-10 font-semibold cursor-pointer text-red-200'>
          <div className="hidden md:flex gap-6 items-center">
            <NavLink className='hover:bg-violet-800 p-2 py-2 rounded-2xl hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/"}>Home</NavLink>
            <NavLink className='hover:bg-violet-800 p-2 py-2 rounded-2xl hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/about"}>About</NavLink>
            <NavLink className='hover:bg-violet-800 p-2 py-2 rounded-2xl hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/contact"}>Contact</NavLink>
            <NavLink className='hover:bg-violet-800 p-2 py-2 rounded-2xl hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/allchats"}>Chat List</NavLink>
            {loggedIn ? (<button className={"bg-gradient-to-r from-pink-700 to-gray-800 hover:border border-gray-900 p-4 rounded-xl hover:rounded-full px-8 hover:transition-all hover:duration-700 hover:ease-in-out"} onClick={HandleLogout}>Logout</button>):(<><NavLink className='hover:bg-violet-800 p-4 py-2 rounded-2xl bg-pink-800 hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/login"}>Login</NavLink>
            <NavLink className='hover:bg-violet-800 p-4 py-2 rounded-2xl bg-pink-800 hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/signup"}>Signup</NavLink></>)}
            </div>
        </ul>

        
        {/* hamburger for mobile */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={ToggleMenu}><GiHamburgerMenu/></div>

        {/* this is for mobile */}
        {MenuOpen && 
        <div className='md:hidden absolute top-0 right-0 w-[70vw] flex flex-col justify-center items-center bg-white mt-4 gap-3 p-4 rounded z-50'>
           <NavLink onClick={ToggleMenu} className='hover:bg-violet-800 p-2 py-2 rounded-2xl hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/"}>Home</NavLink>
            <NavLink onClick={ToggleMenu} className='hover:bg-violet-800 p-2 py-2 rounded-2xl hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/about"}>About</NavLink>
            <NavLink onClick={ToggleMenu} className='hover:bg-violet-800 p-2 py-2 rounded-2xl hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/contact"}>Contact</NavLink>
            <NavLink onClick={ToggleMenu} className='hover:bg-violet-800 p-2 py-2 rounded-2xl hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/allchats"}>Chat List</NavLink>
            {loggedIn ? (<button className={"bg-gradient-to-r from-slate-700 to-gray-800 hover:border border-gray-900 p-4 rounded-xl hover:rounded-full px-8 hover:transition-all hover:duration-700 hover:ease-in-out"} onClick={HandleLogout}>Logout</button>):(<><NavLink onClick={ToggleMenu} className='hover:bg-violet-800 p-4 py-2 rounded-2xl bg-pink-800 hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/login"}>Login</NavLink>
            <NavLink onClick={ToggleMenu} className='hover:bg-violet-800 p-4 py-2 rounded-2xl bg-pink-800 hover:-translate-y-2 transition-all ease-in-out duration-700' to={"/signup"}>Signup</NavLink></>)}
          </div>}
      </nav>
    </div>
  )
}

export default Navbar
