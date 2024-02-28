import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home';
import Buy from "./Pages/Buy"

// import Buy from './Pages/Buy';
import Support from './Pages/Support/Support';



import Licenses from './Pages/Licenses/Licenses';
import ProductDetail from './Pages/ProductDetail/ProductDetail';

import ForgotPassword from './Pages/ForgotPassword';
import ResetPage from './Pages/ResetPage';

import CreateTicket from './Pages/CreateTicket/CreateTicket';


function App() {

  return (
    <>
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/support' element={<Support />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/licenses" element={<Licenses />} />
            <Route path="/productDetail" element={<ProductDetail />} />

            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/reset/:id" element={<ResetPage />} />

            <Route path="/createTicket" element={<CreateTicket/>} />
            <Route path="/buy" element={<Buy/>} />


          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
export default App;


