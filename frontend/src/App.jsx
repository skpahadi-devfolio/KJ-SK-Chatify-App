import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Chatbox from './pages/Chatbox'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AllChats from './pages/AllChats'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/></>
    },
    {
      path: "/about",
      element: <><About/></>
    },
    {
      path: "/contact",
      element: <><Contact/></>
    },
    {
      path: "/login",
      element: <><Login/></>
    },
    {
      path: "/signup",
      element: <><Signup/></>
    },
    {
      path: "/allchats",
      element: <><AllChats/></>
    },
    {
      path: "/chatbox/:user_id",
      element: <><Chatbox/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
