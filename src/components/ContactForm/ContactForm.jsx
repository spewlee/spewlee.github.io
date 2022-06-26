import React from 'react';

import { useForm, ValidationError } from '@formspree/react';

import { Alert } from 'react-bootstrap';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mgedqrpa');

  if (state.succeeded) {
    return (
        <div className="dark-glass p-5 m-5 mb-0 rounded-3">
          <Alert variant="success">
                <Alert.Heading className="fw-bold text-center">Thanks for contacting me, I will get back to you shortly!</Alert.Heading>
            </Alert>
        </div>
    )
  }
  return (
    <form onSubmit={handleSubmit} className='contact-form p-5 m-5 mb-0 rounded-3 glass' id='contactForm'>

        <div className="mb-3">
            <label className="form-label" htmlFor='name'>Your Full Name</label>
            <input id='name' name='name' type="text" className="form-control" />
            <ValidationError prefix='Name' field='name' errors={state.errors} />
        </div>
        
        <div className="mb-3">
            <label className="form-label" htmlFor='email'>Your email address</label>
            <input id='email' type='email' name='email' className="form-control" />
            <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>
        
        <div className="mb-3">
            <label className="form-label" htmlFor='message'>Your message</label>
            <textarea id='message' name='message' className="form-control" />
            <ValidationError prefix='Message' field='message' errors={state.errors} />
        </div>

        <button
            type='submit'
            disabled={state.submitting}
            className='w-100 btn-primary btn-lg fw-bold'
        >
        Submit
        </button>
    </form>
  );
};

export default ContactForm;








// import React from "react";

// // Formspree
// import { useForm } from '@formspree/react';

// //Bootstrap
// import { Form, Alert, Button } from 'react-bootstrap';


// function ContactForm() {

//     // const navigate = useNavigate();

//     const [state, handleSubmit] = useForm("mgedqrpa");
//     if (state.succeeded) {
//         return (
//             <div className="dark-glass">
//                 <Alert variant="success">
//                     <Alert.Heading>Thank you for contacting me!</Alert.Heading>
//                 </Alert>
//             </div>
//         )
//     }

//     return (
        
//         <Form onSubmit={handleSubmit} className="p-4 m-5 mb-0 rounded-3 glass">
//             <h1 className="h3 mb-3 fw-bold text-center">
//             Contact Form
//             </h1>

//             <Form.Group className="mb-3">
//                 <Form.Label for="name">Full Name:</Form.Label>
//                 <Form.Control type="text" placeholder="Enter Full Name.." id="name" />
//                 </Form.Group>

//             <Form.Group className="mb-3">
//                 <Form.Label for="email">Email:</Form.Label>
//                 <Form.Control type="email" placeholder="Enter Email Address.." id="email" />
//                 </Form.Group>

//             <Form.Group className="mb-3">
//                 <Form.Label for="message">Message:</Form.Label>
//                 <Form.Control type="text" placeholder="Enter Message.." id="message" />
//             </Form.Group>
                
//             <Button className="w-100 btn-primary btn-lg fw-bold" type="submit" onClick={handleSubmit}>
//             Submit
//             </Button>
//         </Form>
//     )
// }

// export default ContactForm;