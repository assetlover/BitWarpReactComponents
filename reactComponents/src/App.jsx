import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Signup from './components/signup'
import Signin from './components/signin'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
