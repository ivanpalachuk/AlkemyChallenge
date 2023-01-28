import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const Search = () => {

    const navigate = useNavigate()

    const submitHandler = e => {
        e.preventDefault()
        const keyword = e.currentTarget.keyword.value.trim()

        if (keyword.length === 0) {
            alert("La busquerda no puede estar vacia")
        } else if (keyword.length < 4) {
            alert("Necesitas un minimo de 4 letras")
        } else {
            e.currentTarget.keyword.value = ""
            navigate(`/resultados/${keyword}`)
        }
       
    }

    return (
        <Form className="d-flex" onSubmit={submitHandler}>
            <Form.Control
                type="search"
                placeholder="...palabra clave"
                className="me-1"
                aria-label="Search"
                name='keyword'
                style={{textAlign:"right"}}                
            />
            <Button variant="success" type="submit">Buscar</Button>
        </Form>
    )
}

export default Search