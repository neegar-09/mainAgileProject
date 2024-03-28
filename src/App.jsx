import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home';
import Buy from "./Pages/Buy"
import Support from './Pages/Support/Support';
import Licenses from './Pages/Licenses/Licenses';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPage from './Pages/ResetPage';
import CreateTicket from './Pages/CreateTicket/CreateTicket';
import { useState } from 'react';
import Context from './Context/context';

function App() {

  let [token, setToken] = useState();
  let [licences, setLicense] = useState([]);


  let [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
  });


  let data = {
    token, setToken,
    companies, setCompanies
  }
  return (
    <Context.Provider value={data}>
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
              <Route path="/productDetail/:id" element={<ProductDetail />} />
              <Route path="/forgot" element={<ForgotPassword />} />
              <Route path="/reset/:id" element={<ResetPage />} />
              <Route path="/createTicket" element={<CreateTicket />} />
              <Route path="/buy" element={<Buy />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    </Context.Provider>
  )
}
export default App;


