import './Footer.css'
import Card from 'react-bootstrap/Card'

const Footer = () => {
    return (
        <footer>
            <Card>
                <Card.Header>Disclaimer</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Pagina de practica realizada por Ivan Palachuk.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            probando el footer <cite title="Source Title"> tremendo</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </footer>
    )
}

export default Footer