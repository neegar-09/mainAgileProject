import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
