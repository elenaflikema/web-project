import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

class TestsList extends Component {

    state = {
        editMode: false,
        questionsList: [],
        currentQuestion: {
            question: '',
            variant1: '',
            variant2: '',
            variant3: '',
            answer: '',
        }
    };

    openForm = () => {
        this.setState((state) => ({
            editMode: !state.editMode
        }));
    };

    saveQuestion = (e) => {
        e.preventDefault();
        this.setState({
            questionsList: [
                ...this.state.questionsList,
                this.state.currentQuestion
            ],
            currentQuestion: {
                question: '',
                variant1: '',
                variant2: '',
                variant3: '',
                answer: '',
            }
        })
    };

    handleFormChange = (event) => {
        const { target: { value, name } } = event ;

        this.setState({
            currentQuestion : {
                ...this.state.currentQuestion,
                [name]: value
            }
        });
    };

    renderAddButton() {
        return (
            <Row>
                <Col>
                    <Button onClick={this.openForm}>
                        Add New Test
                    </Button>
                </Col>
            </Row>
        );
    }

    renderTestForm() {

        if (!this.state.editMode) {
            return false;
        }

        return (
            <Form onSubmit={this.saveQuestion}>
                <Form.Row>
                    <Form.Label column="lg" lg={2}>
                        Test Name
                    </Form.Label>
                    <Col>
                        <Form.Control size="lg" type="text" placeholder="Enter Test Name" />
                    </Col>
                </Form.Row>
                <hr />
                <Form.Row>
                    <Form.Label column="lg" lg={2}>
                        Question №{this.state.questionsList.length + 1}
                    </Form.Label>
                </Form.Row>
                <Form.Control value={this.state.currentQuestion.question} onChange={this.handleFormChange} as="textarea" name="question" rows="3" />
                <Form.Row>
                    <Form.Label column>Variants:</Form.Label>
                </Form.Row>
                <Form.Group>
                    <Form.Control value={this.state.currentQuestion.variant1} onChange={this.handleFormChange} name="variant1" type="text" placeholder="Variant 1" />
                </Form.Group>
                <Form.Group>
                    <Form.Control value={this.state.currentQuestion.variant2} onChange={this.handleFormChange} name="variant2" type="text" placeholder="Variant 2" />
                </Form.Group>
                <Form.Group>
                    <Form.Control value={this.state.currentQuestion.variant3} onChange={this.handleFormChange} name="variant3" type="text" placeholder="Variant 3" />
                </Form.Group>
                <Form.Row>
                    <Form.Label column>Right answer:</Form.Label>
                </Form.Row>
                <Form.Group>
                    <Form.Control value={this.state.currentQuestion.answer} onChange={this.handleFormChange} name="answer" type="text" placeholder="Right Answer" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Save Question
                </Button>
            </Form>
        )
    }

    renderQuestionList() {
        return this.state.questionsList.map(({ question, answer }, index) => {
            return (
                <>
                    <h3>Question №{index+1}</h3>
                    <div>{question}</div>
                    <div>{answer}</div>
                    <hr />
                </>
            );
        })
    }

    render() {
        return (
            <Container>
                {this.renderAddButton()}
                {this.renderTestForm()}
                <hr />
                {this.renderQuestionList()}
            </Container>
        );
    }
}

export default TestsList;