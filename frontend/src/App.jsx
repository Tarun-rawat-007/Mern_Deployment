
import './App.css'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

import Profile from './pages/Profile';
import Dhome from './pages/Dhome';
import Settings from './pages/Settings';
import Users from './pages/Users';
import ErrorPage from './pages/ErrorPage';
import AdminDashboard from './pages/AdminDashboard';



function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/service' element={<Services></Services>}></Route>
      <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="dhome" element={<Dhome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<Users />} />
        </Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path="/admin" element={<AdminDashboard/>} />
      <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
    
    </BrowserRouter>
    
      
    </>
  )
}

export default App
