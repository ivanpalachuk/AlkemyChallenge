import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CenteredModal from "../CenteredModal/CenteredModal";


import "./Register.css"



const Register = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
        nickname: ""
    })

    const [passwordMatch, setPasswordMatch] = useState("")
    const [modalShowEmpty, setModalShowEmpty] = useState(false);
    const [modalShowWrongEmail, setModalShowWrongEmail] = useState(false);
    const [modalShowPasswordNotMatch, setModalShowPasswordNotMatch] = useState(false)


    const { signUp } = useAuth()
    const [error, setError] = useState()
    const navigate = useNavigate()

    const handleChange = ({ target: { name, value } }) => {
        setUser({
            ...user, [name]: value
        })
    }

    const submitHandler = async (e) => {

        e.preventDefault()

        const regexEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (user.email == '' || user.password == '') {
            setModalShowEmpty(true)
        }
        if (user.email !== '' && !regexEmail.test(user.email)) {
            setModalShowWrongEmail(true)
        }
        if (user.password !== passwordMatch) {
            setModalShowPasswordNotMatch(true)
        }

        try {
            await signUp(user.email, user.password)
            navigate("/")
        } catch (error) {
            setError(error.message)
        }
    }



    return (
        <>
            {error && <p>{error}</p>}

            <div className="registertitle">
                Registrate
            </div>
            <div style={{ marginTop: "10px", textAlign: "center" }} ><a href="/login" style={{ color: "black" }}>¿Ya tenes una cuenta?  Inicia sesión</a></div>
            <div className="loginregister">
                <div className="loginbox">
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-2" >
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu usuario" name="nickname" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu Email" name="email" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Elegi una Contraseña" name="password" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" name="passwordMatch" >
                            <Form.Label>Repeti tu contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Repeti tu contraseña" onChange={(e) => setPasswordMatch(e.target.value)} />
                        </Form.Group>
                        <div style={{ display: 'flex', justifyContent: "end", marginTop: "25px" }}>
                            <Button variant="dark" type="submit">
                                Registrarse
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
            <CenteredModal
                show={modalShowEmpty}
                onHide={() => setModalShowEmpty(false)}
                head="Error"
                title="Faltan Datos"
                description="Los campos de usuario o contraseña no pueden estar vacios"
            />
            <CenteredModal
                show={modalShowWrongEmail}
                onHide={() => setModalShowWrongEmail(false)}
                head="Error"
                title="Mail Invalido"
                description="Debes escribir una direccion de email valida"
            />
            <CenteredModal
                show={modalShowPasswordNotMatch}
                onHide={() => setModalShowPasswordNotMatch(false)}
                head="Error"
                title="Problemas en tu password"
                description="Las contrasenas no coinciden"
            />
        </>
    )
}


export default Register


