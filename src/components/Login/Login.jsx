import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(true);
    const navigate = useNavigate()

    const submitHandler = e => {

        e.preventDefault()

        const regexEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (email === '' || password === '') {

            if (show) {
                return (
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Error!</Alert.Heading>
                        <p>
                            Los campos no pueden estar vacios!
                        </p>
                    </Alert>
                );
            }

        }
        if (email !== '' && !regexEmail.test(email)) {

            <h2>Debes escribir una direccion de correo electronico valida</h2>

            return
        }
        if (email !== 'challenge@alkemy.org' || password !== 'react') {

            <h2>Credenciales Invalidas</h2>

            return
        }

        axios
            .post('http://challenge-react.alkemy.org', { email, password })
            .then(res => {
                const tokenFromAPI = res.data.token;
                sessionStorage.setItem('token', tokenFromAPI);
                navigate("/novedades");
            })
    }

    const token = sessionStorage.getItem("token")

    return (
        <>
            {token && <Navigate to="/novedades" replace />}
            <h2>Formulario Login</h2>

            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        Nunca compartiremos tus datos con nadie
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" value={password} onChange={(e) => setPassword(e.target.value)}>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Ingresar
                </Button>
            </Form>
        </>
    )
}

export default Login





