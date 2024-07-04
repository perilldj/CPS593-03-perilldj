import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/pages/Navbar';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Login />}/>
            <Route path="register" element={<Register />}/>
            <Route path="profile" element={<Profile />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
