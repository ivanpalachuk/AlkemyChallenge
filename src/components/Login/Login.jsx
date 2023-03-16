import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



import "./Login.css"


const Login = () => {


    const [user, setUser] = useState({
        email: "",
        password: "",
        nickname: ""
    })


    const { logIn } = useAuth()
    const [error, setError] = useState()
    const navigate = useNavigate()

    const handleChange = ({ target: { name, value } }) => {
        setUser({
            ...user, [name]: value
        })
    }

    const submitHandler = async (e) => {

        e.preventDefault()
        try {
            await logIn(user.email, user.password)
            navigate("/")
        } catch (error) {
            setError(error.message)
        }
    }
   
    return (
        <>
            {error && <p>{error}</p>}

            <div className="logincontainer">
                <div className="loginbox">
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu mail" name="email" onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Nunca compartiremos tus datos con nadie
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" name="password" onChange={handleChange} />
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Ingresar
                        </Button>
                        <div style={{ marginTop: "15px" }} ><a href="/register" style={{ color: "black" }}>No estas registrado? Crea una cuenta</a></div>
                    </Form>
                </div>
            </div>

        </>
    )
}

export default Login



