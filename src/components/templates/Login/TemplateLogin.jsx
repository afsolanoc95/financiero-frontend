import React,{ useState} from "react";
import { Form ,Button} from 'react-bootstrap';
import './TemplateLogin.css';


const TemplateLogin =(props)=>{
    
    const {login}=props
    const[details,setDetails]=useState({username:"",password:""});

    const submitHandler= (e)=>{
        e.preventDefault();
        login(details);
    }


    return (
        <div >
            <h1>Sing in</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="username"  placeholder="Enter email" onChange={e=>setDetails({...details,username:e.target.value})} value={details.username}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default TemplateLogin;