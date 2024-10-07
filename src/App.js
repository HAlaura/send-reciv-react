
import './App.css';
// import Header from './components/Header';
import Login from './views/Login';
// import SenderProj from './views/SenderProj';
// import NavComp from "./components/NavComp";

// import { Routes, Route } from "react-router-dom";


function App() {
  
// const links = [
//   { name: "Login", path: "/SenderProj", comp: <SenderProj /> }
  
//   ]; 

  return (
    <div className="App">


{/* <NavComp links={links} className="login-button"/>
                <Routes>
                {links.map((link) => (
                <Route  path={link.path} element={link.comp}  />
                
                ))}
                </Routes> */}


      <Login />
      {/* <Header/> */}
      {/* <SenderProj/>  */}
      
    </div>
  );
}

export default App;
