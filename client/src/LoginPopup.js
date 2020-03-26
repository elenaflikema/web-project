import React, {Component} from 'react';
import {Form, Button, Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import { increment } from './redux/actions';

class LoginPopupContainer extends Component {

    state = {
        email: '',
        password: ''
    };

    componentDidMount() {
        this.fetchData().then(res => {
            console.info(res);
        });
    }

    handleLogin = () => {
        const { email, password } = this.state;

        fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ email, password })
        }).then(
            successResponse => {
                if (successResponse.status != 200) {
                    return null;
                } else {
                    return successResponse.text();
                }
            },
            failResponse => {
                return null;
            }
        ).then(text => {
            console.info(text)
        });

    };

    fetchData = async () => {

    };

    setShow = (show) => {
        this.setState({ ...this.state, show});
    };

    formChange = (event) => {
        const { target: { value, name } } = event ;

        this.setState({
            [name]: value
        });
    };

    render() {

        const handleClose = () => this.setShow(false);

        const handleShow = () => {
            this.setShow(true);
            this.props.increment();
        };

        const { show, password, email } = this.state;

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
                        <Form onChange={this.formChange}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} name="email"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} name="password"/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={this.handleLogin}>
                            Login
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.login,
        counter: state.counter
    }
};

const dispatchToProps = dispatch => {
    return {
        increment: () => dispatch(increment())
    }
};

export default connect(mapStateToProps, dispatchToProps)(LoginPopupContainer);
