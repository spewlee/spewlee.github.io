import React from "react";

// Components
import ContactForm from "../components/ContactForm/ContactForm";

// Bootstrap
import { Container } from "react-bootstrap";

function ContactPage() {
    return (
        <Container>
            <Container className="px-4 py-5 mb-4 dark-glass">
            <h1>Contact Suelee Christie</h1>
            <p>
            I would love to hear from you! Please fill out this form to get in contact.
            </p> 
            </Container>
                    
            <ContactForm />       

        </Container>
        
    )
}

export default ContactPage;