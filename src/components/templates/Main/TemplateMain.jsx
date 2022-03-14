import React ,{ useState}from "react";
import { Button,Form} from 'react-bootstrap';
import './TemplateMain.css';
import Menu from "../../UI/organisms/Menu";

const TemplateMain =(props)=>{
    

    const {saldo,consulta,Logout}=props


    const[details,setDetails]=useState({numero:""});

    const submitHandler= (e)=>{
        
        e.preventDefault();
        consulta(details)
    }

    return (
        <div>
             <Menu Logout={Logout}/>
             <br/><br/><br/><br/>
             <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Digite numero de cuenta</Form.Label>
                    <Form.Control type="text" placeholder="digite numero" onChange={e=>setDetails({...details,numero:e.target.value})} value={details.numero}/>
                 
                </Form.Group>
                <Button variant="primary" type="submit">
                    Consultar
                </Button>
            </Form>
            <br/><br/>
            {
                saldo.message==''?
                <h1></h1>:
                <h1>{saldo.message}</h1>
            }
            
        </div>
    );
}

export default TemplateMain;