import React, { useState,useEffect } from "react";
import TemplateMovimiento from '../templates/Movimiento/TemplateMovimiento';




const Movimiento =(props)=>{
    
    const{entrar,sacar,retiro,consignacion,Logout}=props
    return (
        <TemplateMovimiento entrar={entrar} sacar={sacar}   retiro={retiro}  consignacion={consignacion} Logout={Logout}/>
    );
}

export default Movimiento;