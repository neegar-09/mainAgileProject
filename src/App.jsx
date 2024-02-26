import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home';
import Licenses from './Pages/Licenses/Licenses';
import ProductDetail from './Pages/ProductDetail/ProductDetail';

function App() {

  return (
    <>
    <div className="main">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/licenses" element={<Licenses/>} />
          <Route path="/productDetail" element={<ProductDetail/>}/>

        </Routes>
      </BrowserRouter>
    </div>
    
     

    
    </>
  )
}
export default App;


