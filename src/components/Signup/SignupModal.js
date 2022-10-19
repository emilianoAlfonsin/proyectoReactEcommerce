import { Button, Modal } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useLoginContext } from "../../context/LoginContext";
import './SignupModal.scss'

//Modal de registro con Bootstrap y Formik a mejorar con context
const SignupModal = () => {

    const { validateForm, handleRegSubmit, formSended } = useLoginContext()
    
    return (
        <div className="container">
            <Modal.Header closeButton className="mb-3">
                <Modal.Title>Registrate</Modal.Title>
            </Modal.Header>

            <Formik
                initialValues={{
                    email:'',
                    password:'',
                    confirmPassword:''
                }}
                validate = {validateForm}
                onSubmit={handleRegSubmit}
            >
                {({errors}) => (
                    <Form className="d-grid gap-2" >
                        <div className="row mx-2" >
                            <label htmlFor="email" >Email</label>
                            <Field
                                id="signupEmail"
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                            <ErrorMessage name="email" component={() => (<p className="row reg-error-msg">{errors.email}</p>)}/>
                        </div>
                        <div className="row mx-2" >
                            <label htmlFor="password" >Contraseña</label>
                            <Field
                                id="signupPassword"
                                name="password"
                                type="password"
                                placeholder="********"
                            />
                            <ErrorMessage name="password" component={() => (<p className="row reg-error-msg">{errors.password}</p>)}/>
                        </div>
                        <div className="row mx-2" >
                            <label htmlFor="confirmPassword" >Repetí tu contraseña</label>
                            <Field
                                id="signupConfirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="********"
                            />
                            <ErrorMessage name="confirmPassword" component={() => (<p className="row reg-error-msg">{errors.confirmPassword}</p>)}/>
                        </div>
                        <Button type="submit" className="btn btn-primary row my-3 mx-2" size="sm">Regirstarme</Button>
                        {formSended && <p className="reg-success-msg"> Formulario enviado con éxito!</p>}
                    </Form>
                )}
            </Formik >
            <div>
                <p className="reg-switch-login">Ya tenés una cuenta? Logueate</p>
            </div>                    
        </div>
    )
}

export default SignupModal