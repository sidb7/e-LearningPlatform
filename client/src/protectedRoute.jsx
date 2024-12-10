import { Navigate } from 'react-router-dom';
import React from 'react';


const ProtectedRoute = ({children})=>{

const token = JSON.parse(localStorage.getItem('tokenData'))
// console.log(token,"TOKENNN")
return token?.accessToken? children: <Navigate to="/login" />;

}


export default ProtectedRoute