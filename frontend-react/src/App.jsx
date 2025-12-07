import { useState } from 'react'
import './assets/css/style.css'
import Main from './components/main.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/register.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Login from './components/login.jsx'
// import AuthProvider from './authProvider'
import AuthProvider from './AuthProvider'
import Dashboard from './components/dashboard/dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
        <Route path='/login'element={<PublicRoute><Login/></PublicRoute>}/>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
