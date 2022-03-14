import React ,{ useState} from "react";
import { Button,Form} from 'react-bootstrap';
import './TemplateMovimiento.css';
import Menu from "../../UI/organisms/Menu";

const TemplateMain =(props)=>{
    

    const {entrar,sacar,retiro,consignacion,Logout}=props

    const[details,setDetails]=useState({numero_cuenta:"",valor:""});
    const[details2,setDetails2]=useState({numero_cuenta:"",valor:""});

    const submitHandlerRetiro= (e)=>{
        e.preventDefault();
        retiro(details);
    }

    const submitHandlerConsignacion= (e)=>{
        e.preventDefault();
        consignacion(details2);
    }
    return (
        <div>
             <Menu Logout={Logout}/>
             <br/><br/><br/><br/>
             <h1>Consignacion</h1>
             <Form onSubmit={submitHandlerConsignacion}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Digite numero de cuenta</Form.Label>
                    <Form.Control type="text" placeholder="digite numero"  onChange={e=>setDetails2({...details2,numero_cuenta:e.target.value})} value={details2.numero_cuenta}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Digite valor a consignar</Form.Label>
                    <Form.Control type="text" placeholder="digite numero" onChange={e=>setDetails2({...details2,valor:e.target.value})} value={details2.valor}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    consignar
                </Button>
            </Form>
            {
                entrar.message==''?
                <h1></h1>:
                <h1>{entrar.message}</h1>
            }
            <br/><br/><br/><br/>
            <h1>Retiro</h1>
            <Form onSubmit={submitHandlerRetiro}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Digite numero de cuenta</Form.Label>
                    <Form.Control type="text" placeholder="digite numero"  onChange={e=>setDetails({...details,numero_cuenta:e.target.value})} value={details.numero_cuenta}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Digite valor a retirar</Form.Label>
                    <Form.Control type="text" placeholder="digite numero" onChange={e=>setDetails({...details,valor:e.target.value})} value={details.valor}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    retirar
                </Button>
            </Form>
            {
                sacar.message==''?
                <h1></h1>:
                <h1>{sacar.message}</h1>
            }
        </div>
    );
}

export default TemplateMain;