import React, { useState,useEffect } from "react";
import TemplateRegistry from '../templates/Registry/TemplateRegistry';




const Registry =(props)=>{
    
    const{cuenta,registro,Logout}=props
    return (
        <TemplateRegistry cuenta={cuenta} registro={registro} Logout={Logout}/>
    );
}

export default Registry;