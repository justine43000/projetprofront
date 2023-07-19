// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import "./ContactForm.css";
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("xjvdqlar");
    if (state.succeeded) {
        return <p>Nous revenons vers vous au plus vite</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="formcontact">
            <label htmlFor="email" className="labelcont">
                Adresse e-mail
            </label>
            <input
                id="email"
                type="email"
                name="email"
                className="text"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message" className="labelcont">
                Votre message
            </label>
            <textarea
                id="message"
                name="message"
                className="texta"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className="btnsubmit">
                Envoyer
            </button>
        </form>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;