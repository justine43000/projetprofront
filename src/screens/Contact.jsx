import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import '../assets/css/Contact.css'
import ContactForm from '../components/Contact/ContactForm'

export default function Contact() {
    return (
        <div className='contact'>
            <Navbar/>
            <div className='cont'>
            <img src="/src/assets/SimplIEF.png" />
            <ContactForm />
            </div>
        </div>
    )
}
