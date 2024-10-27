import logo from './logo.svg';
import './App.css';
import ISignUp from './component/IndustrySignup';
import SignUp from './component/Signup';
import SSignUp from './component/StudentSignup';
import ASignUp from './component/AcademiaSignup';
import LoginPage from './component/LoginPage'; // Make sure the import path matches the file name
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the initial sign-up page */}
        <Route path="/" element={<SignUp />} />
        
        {/* Define the routes for the specific sign-up pages */}
        <Route path="/industrysignup" element={<ISignUp />} />
        <Route path="/studentsignup" element={<SSignUp />} />
        <Route path="/academiasignup" element={<ASignUp />} />
        
        {/* Define the route for the login page */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
