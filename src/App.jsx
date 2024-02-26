import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Licenses from './Pages/Licenses/Licenses';

function App() {

  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/licenses' element={<Licenses/>}/>
        </Routes>
      </BrowserRouter>
     
    
    </>
  )
}
export default App
