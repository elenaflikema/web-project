import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import './css/Button.scss';

const EMPTY_QUESTION = {
    question: '',
    variant1: '',
    variant2: '',
    variant3: '',
    answer: ''
};

export const TestsList = () => {

    const [ questionsList, editQuestionsList ] = useState([]);
    const [ currentQuestion, setCurrentQuestion ] = useState(EMPTY_QUESTION);

    const saveQuestion = (e) => {
        e.preventDefault();
        editQuestionsList([
            ...questionsList,
            currentQuestion
        ]);
        setCurrentQuestion(EMPTY_QUESTION);
    };

    const removeQuestion = () => {
        console.info('removed')
    }


    const editCurrentQuestion = (e) => {
        e.preventDefault();

        const { target: {name, value}} = e;

        setCurrentQuestion({
                ...currentQuestion,
                [name]: value
            }
        )
    };

    const renderTestForm = () => {

        return (
            <Form onSubmit={saveQuestion}>
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
                        Question №{questionsList.length + 1}
                    </Form.Label>
                </Form.Row>
                <Form.Control value={currentQuestion.question} onChange={editCurrentQuestion} as="textarea" name="question" rows="3" />
                <Form.Row>
                    <Form.Label column>Variants:</Form.Label>
                </Form.Row>
                <Form.Group>
                    <Form.Control value={currentQuestion.variant1} onChange={editCurrentQuestion} name="variant1" type="text" placeholder="Variant 1" />
                </Form.Group>
                <Form.Group>
                    <Form.Control value={currentQuestion.variant2} onChange={editCurrentQuestion} name="variant2" type="text" placeholder="Variant 2" />
                </Form.Group>
                <Form.Group>
                    <Form.Control value={currentQuestion.variant3} onChange={editCurrentQuestion} name="variant3" type="text" placeholder="Variant 3" />
                </Form.Group>
                <Form.Row>
                    <Form.Label column>Right answer:</Form.Label>
                </Form.Row>
                <Form.Group>
                    <Form.Control value={currentQuestion.answer} onChange={editCurrentQuestion} name="answer" type="text" placeholder="Right Answer" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Save Question
                </Button>
            </Form>
        )
    };

    const renderQuestionList = () => {
        return questionsList.map(({ question, answer }, index) => {
            return (
                <React.Fragment>
                    <h3>Question №{index+1}</h3>
                    <div>{question}</div>
                    <div>{answer}</div>
                    <Button variant="primary" size="sm" onClick={() => removeQuestion(index)}>
                        Remove
                    </Button>
                    <hr />
                </React.Fragment>
            );
        })
    };

    return (
        <Container>
            {renderTestForm()}
            <hr />
            {renderQuestionList()}
        </Container>
    );
};

/*class TestsList extends Component {

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
                <React.Fragment>
                    <h3>Question №{index+1}</h3>
                    <div>{question}</div>
                    <div>{answer}</div>
                    <Button variant="primary" size="sm" onClick={() => this.removeQuestion(index)}>
                        Remove
                    </Button>
                    <hr />
                </React.Fragment>
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

export default TestsList;*/