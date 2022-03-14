import React ,{ useState}from "react";
import { Button,Form,Container,Row,Col,Alert,Spinner} from 'react-bootstrap';
import './TemplateRegistry.css';
import Menu from "../../UI/organisms/Menu";

const TemplateMain =(props)=>{
    
    const[details,setDetails]=useState({saldo:"",telefono:"",telefono_secundario:"",email:"",email_secundario:"",nombre:"",apellido:"",cedula:"",edad:""});
    const {cuenta,registro,Logout}=props
    const [show, setShow] = useState(true);

    const submitHandler= (e)=>{
        e.preventDefault();
        registro(details)
    }
    return (
        <div>
             <Menu Logout={Logout}/>
             <br/><br/><br/><br/>
             <h1>Crear</h1>
             <Container>
                <Row>
                    <Col>
                    <h1 className="text-info">Cuenta de ahorros</h1>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form onSubmit={submitHandler}>
                        <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            onChange={e=>setDetails({...details,nombre:e.target.value})} value={details.name}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Your Lastname"
                            required
                            onChange={e=>setDetails({...details,apellido:e.target.value})} value={details.apellido}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>cedula</Form.Label>
                        <Form.Control
                            type="number"
                            name="cedula"
                            placeholder="cedula"
                            required
                            onChange={e=>setDetails({...details,cedula:e.target.value})} value={details.cedula}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control
                            type="number"
                            name="phone"
                            placeholder="Phone"
                            required
                            onChange={e=>setDetails({...details,telefono:e.target.value})} value={details.telefono}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Telefono secundario</Form.Label>
                        <Form.Control
                            type="number"
                            name="phone"
                            placeholder="Phone"
                            onChange={e=>setDetails({...details,telefono_secundario:e.target.value})} value={details.telefono_secundario}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>correo</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            required
                            onChange={e=>setDetails({...details,email:e.target.value})} value={details.email}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>correo secundario</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            onChange={e=>setDetails({...details,email_secundario:e.target.value})} value={details.email_secundario}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>saldo inicial</Form.Label>
                        <Form.Control
                            type="number"
                            name="saldo"
                            placeholder="saldo"
                            required
                            onChange={e=>setDetails({...details,saldo:e.target.value})} value={details.saldo}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>edad</Form.Label>
                        <Form.Control
                            type="number"
                            name="edad"
                            placeholder="edad"
                            required
                            onChange={e=>setDetails({...details,edad:e.target.value})} value={details.edad}
                        />
                        </Form.Group>
                        <Form.Text>
                        </Form.Text>
                    <br/>
                        <Button
                        variant="primary"
                        type="submit"
                        >
                        crear
                        </Button>
                    </Form>
                    </Col>
                </Row>
                </Container>
                <br/><br/>
            {
                cuenta.numero_cuenta==''?
                show?
                <Alert variant="danger"  onClose={() => setShow(false) } dismissible>
                     <Alert.Heading>no se creo la cuenta</Alert.Heading>
                    <p>
                    verifique la informacion
                    </p>
                </Alert>:<h1></h1>
                :
                <Alert variant="success">
                    <Alert.Heading>numero de cuenta :{cuenta.numero_cuenta}</Alert.Heading>
                    <p>
                       fecha: {cuenta.fecha_creacion}
                       </p><p>
                       saldo: {cuenta.saldo_inicial}
                       </p>
                    <hr />
                    <p className="mb-0">
                       nombre: {cuenta.nombre}
                       </p>
                       <p>
                       apellido: {cuenta.apellido} </p>
                    
                </Alert>
            }
        </div>
    );
}

export default TemplateMain;