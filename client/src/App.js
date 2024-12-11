import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import LoginPage from './components/Login';
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./protectedRoute";
import Register from "./components/Register";


function App() {
  return (

    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>


    </BrowserRouter>


  );
}

export default App;
