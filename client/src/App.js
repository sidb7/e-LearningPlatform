import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';

import LoginPage from './components/Login';
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./protectedRoute";
import Register from "./components/Register";

import React, { useState } from 'react';
import LandingPage from "./components/LandingPage";
import CheckoutCart from "./components/CheckoutCart";


function App() {

 
  
  return (

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/purchase" element={<CheckoutCart/>} />
      </Routes>


    </BrowserRouter>


  );
}

export default App;
