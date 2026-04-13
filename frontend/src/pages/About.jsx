import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaRocketchat } from 'react-icons/fa'
import { RiChatSmileAiLine } from 'react-icons/ri'

const About = () => {
  const [offer, setoffer] = useState([
    "Real-time messaging for instant communication",
    "Clean and modern interface for better usability",
    "Secure and private conversations",
    "Smooth experience across devices"
  ])
  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen w-full bg-neutral-900"><div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-10 blur-[100px] pointer-events-none"></div>

        <div className='flex flex-col pb-28 cursor-pointer'>
          {/* first section */}
          <section className="bg-neutral-700 w-[95vw] max-w-2xl mx-auto p-3 py-5 rounded-xl my-10 font-bold text-3xl shadow-lg shadow-blue-900 transition-all ease-in-out duration-700 hover:-translate-y-4 active:rotate-y-45">
            <p className='flex justify-center items-center gap-2'><FaRocketchat />About<span className='pacifico'>KJ&SK</span></p>
            <p className='font-semibold text-lg my-5'>KJ&SK Chatify is a modern messaging platform designed to make communication fast, simple, and seamless. Whether you're connecting with friends, family, or colleagues, our app ensures a smooth and enjoyable chatting experience.</p>
          </section>


          {/* second section */}
          <section className="bg-neutral-700 w-[95vw] max-w-2xl mx-auto p-3 py-5 rounded-xl my-10 font-bold text-3xl shadow-lg shadow-blue-900 transition-all ease-in-out duration-700 hover:-translate-y-4 active:rotate-y-45">
            <p className='text-center'>Our Mission</p>
            <p className='text-lg font-semibold my-5'>Our mission is to provide a reliable and user-friendly chat platform where people can communicate effortlessly without distractions.</p>
          </section>


          {/* third section */}
          <section className="bg-neutral-700 w-[95vw] max-w-2xl mx-auto p-3 py-5 rounded-xl my-10 font-bold text-3xl shadow-lg shadow-blue-900 transition-all ease-in-out duration-700 hover:-translate-y-4 active:rotate-y-45">
            <p className='text-center font-bold'>What We Offer</p>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 my-10 md:overflow-visible overflow-y-scroll'>
              {offer.map((item, index) => {
                return <div key={index} className="bg-slate-900 text-white rounded-xl transition-all ease-in-out duration-700 text-lg hover:rotate-y-90">
                  <p className='p-5 py-10'>{item}</p>
                </div>
              })}
            </div>
          </section>


          {/* fourth section */}
          <section className="bg-neutral-700 w-[95vw] max-w-2xl mx-auto p-3 py-5 rounded-xl my-10 font-bold text-3xl shadow-lg shadow-blue-900 transition-all ease-in-out duration-700 hover:-translate-y-4 active:rotate-y-45">
            <p className='text-center font-bold'>Why Choose KJ&SK Chatify?</p>
            <p className='text-lg my-6'>KJ&SK Chatify focuses on simplicity, speed, and user comfort. We believe chatting should feel natural, not complicated.</p>
          </section>


          {/* fifth section */}
          <section className="bg-neutral-700 w-[95vw] max-w-2xl mx-auto p-3 py-5 rounded-xl my-10 font-bold text-3xl shadow-lg shadow-blue-900 transition-all ease-in-out duration-700 hover:-translate-y-4 active:rotate-y-45">
            <p className='text-center font-bold'>Our Vision</p>
            <p className='text-lg my-6'>We aim to continuously improve and bring new features that enhance the way people connect and communicate in the digital world.</p>
          </section>


          {/* sixth section */}
          <section className="bg-neutral-700 w-[95vw] max-w-2xl mx-auto p-3 py-5 rounded-xl my-10 font-bold text-3xl shadow-lg shadow-blue-900 transition-all ease-in-out duration-700 hover:-translate-y-4 active:rotate-y-45">
            <p className='flex justify-center items-center gap-2'><RiChatSmileAiLine className='text-amber-600' />Thank You</p>
            <p className='text-lg my-6'>Thank you for choosing KJ&SK Chatify. We're excited to have you with us</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
