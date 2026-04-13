import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TypingText from '../components/TypingText'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col relative'>
      <Navbar />
      <div className="relative min-h-screen bg-slate-950 overflow-hidden">
        {/* left glow of background */}
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        {/* right glow of background */}
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

        {/* main content of this page */}
        <div className="flex justify-center items-center flex-col gap-4 text-center text-white my-32">
          <p className='text-4xl'>Welcome to <span className='pacifico'><TypingText/></span></p>
          <div className='text-center my-10'>
            <p className='md:text-3xl'>Download and Enjoy this ChatifyApp to connect with your friends</p>
            <p className='md:text-3xl'>and talk with them daily and make feel better</p>
          </div>

          <div className='flex flex-col text-center gap-4 md:text-2xl'>
            <p>Here is the Signup button for Sign in this KJ&SK ChatifyApp</p>
            <p>Let's Start Your Chat</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
