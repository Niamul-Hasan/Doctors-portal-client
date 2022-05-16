import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import PrivateLogin from './Pages/Login/PrivateLogin';
import Register from './Pages/Login/Social/Register';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointment from './Pages/DashBoard/MyAppointment';
import MyReview from './Pages/DashBoard/MyReview';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/appointment" element={<PrivateLogin><Appointment />
        </PrivateLogin>}></Route>

        {/* nested Route  */}
        <Route path="/dash" element={<PrivateLogin><DashBoard />
        </PrivateLogin>}>
          <Route index element={<MyAppointment />}>
          </Route>
          <Route path='/dash/myreview' element={<MyReview />}></Route>
        </Route>  {/* nested Route  */}

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
