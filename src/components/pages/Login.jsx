import React, { useState,useEffect } from "react";
import TemplateLogin from '../templates/Login/TemplateLogin';




const Login =(props)=>{
  
    const{login}=props

    return (
            <TemplateLogin login={login}/>
    );
}

export default Login;