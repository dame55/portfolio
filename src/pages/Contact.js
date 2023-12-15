import React from "react";
import Navitor from "../components/Navitor";
import './Styles.css';
import ana from './ana.jpg'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // @ts-ignore
        emailjs.sendForm('service_6e34irh', 'template_ei8f65j', form.current, 'UUkmAstq3ch4nNs3J')
            .then((result) => {
                console.log("YOUR MESSAGE IS SENT SUCCESSFULLY");

            }, (error) => {
                console.log(error.text);
            });
    };











    return (
        <div className="Contact">
            <Navitor />



            <div className='contact-card'>

                <h1>Contact</h1>
                <div className='tex3'>
                    <p className="p3">We would love to hear from you! Whether you have a question, feedback, or just want to say hello, we are here to help. Our dedicated team is ready to assist you with any inquiries you may have. Feel free to reach out to us through email, phone, or social media. We are committed to providing exceptional customer service and look forward to connecting with you. Thank you for considering us as your point of contact. We can't wait to hear from you!

                    </p>
                </div>


                <img className='meee' src={ana} alt="" />



<div className="formi">
                <form
                    // @ts-ignore
                    ref={form} onSubmit={sendEmail}>
                    <label>Name: </label>
                    <input type="text" name="user_name" />
                    <label>Email: </label>
                    <input type="email" name="user_email" />
                    <div className="11">
                    <label>Message: </label>
                    <textarea name="message" />
                    <input className="inp" type="submit" value="Send" />
                    </div>
                </form>

</div>





            </div>
        </div>









    )
}
export default Contact;