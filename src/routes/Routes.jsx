
import '../styles/App.css';
import React ,{ useState}from "react";
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Login from "../components/pages/Login"
import Main from "../components/pages/Main"
import Movimiento from "../components/pages/Movimiento"
import Registry from "../components/pages/Registry"
import axios from "axios";


const baseUrl ="http://localhost:8080";




const App=()=> {

  const[saldo,setSaldo]=useState({message:""});
  const[cuenta,setcuenta]=useState({numero_cuenta:"",fecha_creacion:"",saldo_inicial:"",nombre:"",apellido:""});
  const[sacar,setSacar]=useState({message:""});
  const[entrar,setEntrar]=useState({message:""});


  let config={
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
  }


  const login=async(details)=>{
    await axios.post(baseUrl+"/login",
      JSON.stringify({username:details.username,password: details.password}),
      {
        headers:{'Content-Type': 'application/json'}
        ,withCredentials: true
      })
    .then(response=>{
        localStorage.setItem('token',response.data)
        return response.data
    }).then(response=>{
      
        if(response.startsWith('Bearer')){
            window.location.href="./Main"
        }else{
            alert("no pudo ingresar")
        }
    }).
    catch(error=>{
      alert("no pudo ingresar")
        console.log(error.message)
    })
  }

  const consulta=async(details)=>{
    await axios.get(baseUrl+"/Financiero/persona?numero="+details.numero,config)
    .then(response=>{
      setSaldo(response.data)
      return response.data
    })
  } 
  
  const retiro=async(details)=>{
    let request=JSON.stringify({numero_cuenta:Number(details.numero_cuenta),valor:Number(details.valor)})

    await axios.put(baseUrl+"/Financiero/personaRetiro",request,config)
    .then(response=>{
      setSacar(response.data)
      return response.data
    })
  }  

  const consignacion=async(details)=>{
    let request=JSON.stringify({numero_cuenta:Number(details.numero_cuenta),valor:Number(details.valor)})
    await axios.put(baseUrl+"/Financiero/personaConsigna",request,config)
    .then(response=>{
      setEntrar(response.data)
      return response.data
    })
  }  

  const registro=async(details)=>{

    let request=JSON.stringify({saldo:Number(details.saldo),telefono: details.telefono,telefono_secundario:details.telefono_secundario,email: details.email,email_secundario:details.email_secundario,nombre: details.nombre,apellido:details.apellido,cedula: Number(details.cedula),edad:Number(details.edad)})
    await axios.post(baseUrl+"/Financiero/persona",
    request
    ,config)
    .then(response=>{
      setcuenta(response.data)
      return response.data
    })
  } 

  const Logout =()=>{
    localStorage.removeItem('token');
    window.location.href="/";
  }

  return (
    <div >

      <BrowserRouter>
        <Routes >
          <Route exact path="/" element={<Login login={login}/>}/>
          <Route exact path="/Main" element={<Main saldo={saldo} consulta={consulta} Logout={Logout}/>}/>
          <Route exact path="/Movimiento" element={<Movimiento  entrar={entrar} sacar={sacar}   retiro={retiro}  consignacion={consignacion}  Logout={Logout}/>}/>
          <Route exact path="/Crear" element={<Registry  cuenta={cuenta} registro={registro} Logout={Logout}/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
