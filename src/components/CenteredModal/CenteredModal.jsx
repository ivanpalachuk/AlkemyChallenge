import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CenteredModal(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.head}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CenteredModal