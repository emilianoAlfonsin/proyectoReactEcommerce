import LoginIcon from '@mui/icons-material/Login';
import { Form, Button, Modal } from "react-bootstrap";
import { useLoginContext } from '../../context/LoginContext';

const LoginModal = () => {

    const { show, handleClose, handleShow } = useLoginContext()

    return (
        <>
            <LoginIcon onClick={handleShow}/>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Logueate</Modal.Title>
                </Modal.Header>
                <Form.Group className="m-3" controlId="loginEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="m-3" controlId="loginPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div>                    
                    <Button className="m-3" type="submit" variant="outline-primary" onClick={handleClose}>
                        Login
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default LoginModal