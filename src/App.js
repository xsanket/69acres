import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import Header from "./pages/components/Header";


function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/forgot-password" element ={<ForgotPassword/>}/>
        <Route path="/sign-in" element ={<SignIn/>}/>
        <Route path="/sign-up" element ={<SignUp/>}/>
        <Route path="/profile" element ={<Profile/>}/>
        <Route path="/offers" element ={<Offers/>}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
