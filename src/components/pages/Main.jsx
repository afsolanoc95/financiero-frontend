import React, { useState,useEffect } from "react";
import TemplateMain from '../templates/Main/TemplateMain';




const Main =(props)=>{
    
    const{saldo,consulta,Logout}=props
    return (
        <TemplateMain saldo={saldo} consulta={consulta} Logout={Logout}/>
    );
}

export default Main;