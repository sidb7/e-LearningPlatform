import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';


const ProtectedRoute = ({children})=>{
const location = useLocation()
console.log(location,"LOCATION1111")
const token = JSON.parse(localStorage.getItem('tokenData'))
// console.log(token,"TOKENNN")
return token?.accessToken ? (
  children
) : (
  <Navigate to="/login" state={{from:location}} replace />
);

}


export default ProtectedRoute