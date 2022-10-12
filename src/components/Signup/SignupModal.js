import { Button, Modal } from "react-bootstrap";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useLoginContext } from "../../context/LoginContext";
import './SignupModal.scss'

//Modal de registro con Bootstrap y Formik a mejorar con context
const SignupModal = () => {

    const { show, handleClose, handleShow, validateForm, regSubmit, formSended } = useLoginContext()
    
    return (
        <>
            <AccountCircleIcon onClick={handleShow}/>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Registrate</Modal.Title>
                </Modal.Header>
                <div className="container my-2">

                <Formik
                    initialValues={{
                        name:'',
                        email:'',
                        password:'' 
                    }}

                    validate = {validateForm}

                    onSubmit={regSubmit}
                >
                    {({errors}) => (
                        <Form className="d-grid" >
                            <div className="row g-2">
                                <label htmlFor="name" className="reg-imput-label">Nombre</label>
                                <Field
                                    id="signupName"
                                    name="name"
                                    type="text"
                                    placeholder="Nombre completo"
                                />
                                <ErrorMessage name="name" component={() => (<p className="row reg-error-msg">{errors.name}</p>)}/>
                            </div>
                            <div className="row g-2" >
                                <label htmlFor="email" >Email</label>
                                <Field
                                    id="signupEmail"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                />
                                <ErrorMessage name="email" component={() => (<p className="row reg-error-msg">{errors.email}</p>)}/>
                            </div>
                            <div className="row g-2" >
                                <label htmlFor="password" >Password</label>
                                <Field
                                    id="signupPassword"
                                    name="password"
                                    type="password"
                                    placeholder="********"
                                />
                                <ErrorMessage name="password" component={() => (<p className="row reg-error-msg">{errors.password}</p>)}/>
                            </div>
                            <Button type="submit" className="btn btn-primary row g-2 mt-2" size="sm">Regirstarme</Button>
                            {formSended && <p className="reg-success-msg"> Formulario enviado con éxito!</p>}
                        </Form>
                    )}                    
                </Formik >
                </div>
            </Modal>
        </>
    )
}

export default SignupModal