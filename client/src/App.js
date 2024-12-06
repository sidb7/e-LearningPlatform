import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import VerticalNav from './components/VerticalNav';
import CourseGridContainer from './components/CourseGridContainer';
import LoginPage from './components/Login';

function App() {
  return (

    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginPage/>} />
      </Routes>


    </BrowserRouter>


  );
}

export default App;
