// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import AboutMe from './routes/AboutMe';
import Skills from './routes/Skills';
import Projects from './routes/Projects';
import ContactMe from './routes/ContactMe';
import Home from './routes/Home';
import LoginRegister from './routes/LoginRegister';
import Login from './routes/Login';
import Register from './routes/Register';
import ProtectedRoute from './components/ProtectedRoute';
import LogOut from './routes/LogOut';

function App() {
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem('auth');
    return storedAuth ? JSON.parse(storedAuth) : { token: false };
  });

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth));
    // sessionStorage.setItem('auth', JSON.stringify(auth)); // Alternatively, use sessionStorage
  }, [auth]);
  
  return (
    <Router>
      <>
        <Routes>
          <Route path = "/" element ={<LoginRegister/>}/>
          <Route path = "/login" element ={<Login setAuth={setAuth}/>}/>
          <Route path = "/register" element ={<Register/>}/>
          <Route path = "/logout" element ={<LogOut setAuth={setAuth}/>}/>

          <Route element={<ProtectedRoute auth={auth}/>}>
            <Route  path = "/home" element= {<Home/>}/>
            <Route  path="/about" element={<AboutMe />} />
            <Route  path="/skills" element={<Skills />} />
            <Route  path="/projects" element={<Projects />} />
            <Route  path="/contact" element={<ContactMe />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
}
export default App;
