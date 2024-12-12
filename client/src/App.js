import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';

import LoginPage from './components/Login';
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./protectedRoute";
import Register from "./components/Register";

import React, { useState } from 'react';
import CoursePuchasePage from "./components/CoursePurchase";


function App() {

  const [shopCart,setShopCart] = useState('')

  return (

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to={"/login"}></Navigate>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard shopCart={shopCart} setShopCart = {setShopCart} /></ProtectedRoute>} />
      <Route path="/purchase" element={<CoursePuchasePage shopCart={shopCart}/>} />
      </Routes>


    </BrowserRouter>


  );
}

export default App;
