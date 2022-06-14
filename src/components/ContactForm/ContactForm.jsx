import React from "react";

// Formspree
import { useForm } from '@formspree/react';

//Bootstrap
import { Form, Alert, Button } from 'react-bootstrap';


function ContactForm() {

    // const navigate = useNavigate();

    const [state, handleSubmit] = useForm("mgedqrpa");
    if (state.succeeded) {
        return (
            <div className="dark-glass">
                <Alert variant="success">
                    <Alert.Heading>Thank you for contacting me!</Alert.Heading>
                </Alert>
            </div>
        )
    }

    return (
        
        <Form onSubmit={handleSubmit} className="p-4 m-5 mb-0 rounded-3 glass">
            <h1 className="h3 mb-3 fw-bold text-center">
            Contact Form
            </h1>

            <Form.Group className="mb-3">
                <Form.Label for="name">Full Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name.." id="name" />
                </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label for="email">Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter Email Address.." id="email" />
                </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label for="message">Message:</Form.Label>
                <Form.Control type="text" placeholder="Enter Message.." id="message" />
            </Form.Group>
                
            <Button className="w-100 btn-primary btn-lg fw-bold" type="submit" onClick={handleSubmit}>
            Submit
            </Button>
        </Form>
    )
}

export default ContactForm;