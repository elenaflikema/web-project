import React, {Component, useState} from 'react';
import {Form, Button, Modal} from 'react-bootstrap';

export default class Login extends Component {

    state = {
        auth: false
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const data = await fetch('/auth');
        const result = await data.json();
        this.setState({auth: result.auth});
    };

    setShow = (show) => {
        this.setState({ ...this.state, show});
    }

    render() {

        const handleClose = () => this.setShow(false);
        const handleShow = () => this.setShow(true);

        const { show } = this.state;

        return (
            <>
                <Button variant="primary" onClick={handleShow}>
                    Login
                </Button>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Log in to your account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

}

