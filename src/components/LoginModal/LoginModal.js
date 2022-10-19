import { Form, Button, Modal } from "react-bootstrap";
// import { useLoginContext } from '../../context/LoginContext';

const LoginModal = () => {

    return (
        <div className="container">
                <Modal.Header closeButton>
                    <Modal.Title>Logueate</Modal.Title>
                </Modal.Header>
                <Form.Group className="my-3" controlId="loginEmail">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="my-3" controlId="loginPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div>                    
                    <Button className="mb-3 w-100" type="submit" variant="outline-primary" >
                        Login
                    </Button>
                </div>
                <div>
                    <span className="text-center">Aún no tenés una cuenta? Registrate</span>
                </div>
        </div>
    )
}

export default LoginModal