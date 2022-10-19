import LoginIcon from '@mui/icons-material/Login';
import { Modal } from 'react-bootstrap';
import { useLoginContext } from '../../context/LoginContext';
import SignupModal from '../Signup/SignupModal';
import LoginModal from '../LoginModal/LoginModal';

const SignModal = () => {

    const {show, handleShow, handleClose} = useLoginContext()

    return (
        <>
            <LoginIcon onClick={handleShow}/>
            <Modal show={show} onHide={handleClose} centered>
                {/* <LoginModal/> */}
                <SignupModal/>
            </Modal>
        </>
    )
}

export default SignModal