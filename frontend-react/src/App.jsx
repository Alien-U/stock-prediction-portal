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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login'element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
