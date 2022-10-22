import React, { useRef , useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9t2ivnd', 'template_0510peu', form.current, '2PHluZ8FTnIrYRNNN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();

    };
    const [btnTxt, setBtnTxt] = useState('Send')
    const onClick =()=>{
        setBtnTxt('Sent')
    }
    return (
        <div className='c-container'>
            <h3 className="heading p-heading">Contact 📱</h3>
            <div className="c-wrapper">
                <div className="left">
                    <div className="c-options">
                        <div className="phone c-card">
                            <i class="fa-solid fa-phone"></i>
                            <h4>Phone</h4>
                            <a href="tel:+919997340479"><h5>+91 9997340479</h5></a>
                        </div>
                        <div className="email c-card">
                            <i class="fa-regular fa-envelope"></i>
                            <h4>Email</h4>
                            <a href="mailto:altamashaseer9@gmail.com" target='_blank' rel="noreferrer"><h5>altamashaseer9@gmail.com</h5></a>
                            {/* <a href="mailto:altamashaseer@gmail.com" target='_blank' rel="noreferrer"><h5>altamashaseer@gmail.com</h5></a> */}
                        </div>
                        <div className="linkedin c-card">
                            <a href="https://www.linkedin.com/in/altamash-aseer-746aa3193/" target='_blank' rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                            <h4>LinkedIn</h4>
                            <a href="https://www.linkedin.com/in/altamash-aseer-746aa3193/" target='_blank' rel="noreferrer"><h5>altamashaseer</h5></a>
                        </div>
                    </div>

                    <div className="right">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="name" id="name" required placeholder='Your Name' />
                            <input type="email" name="email" id="email" required placeholder='Email' />
                            <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message' required></textarea>
                            <button type='submit' onClick={onClick} className='f-button button'>{btnTxt}</button>
                            <span class="material-symbols-outlined">send</span>
                            <span class="material-symbols-outlined">sentiment_satisfied</span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
