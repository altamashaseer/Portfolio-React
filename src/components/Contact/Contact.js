import React, { useRef, useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9t2ivnd', 'template_0510peu', form.current, '2PHluZ8FTnIrYRNNN')

        e.target.reset();

    };
    const [btn, setBtn] = useState({ Txt: 'Send', Icon: 'send' })

    const [Display, setDisplay] = useState({ form: true, success: false })
    const onClick = () => {
        setBtn({ Txt: 'Sent', Icon: 'done' })
        setDisplay({ form: false, success: true })
    }


    const [Toggle, setToggle] = useState(true)
    const handleOnChange = (e) => { // for disabling buttons
        if (e.target.value.length !== 0) {
            setToggle(false)
        }
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
                </div>
                <div className="right">
                    <form ref={form} onSubmit={sendEmail} style={{ display: Display.form ? 'flex' : 'none' }}>
                        <div className='form-heading'>
                        <h4 >..or directly send a message</h4>
                        <i class="fa-solid fa-turn-down"></i>
                        </div>
                        <input type="text" name="name" id="name" onChange={handleOnChange} required placeholder='Name' />
                        <input type="email" name="email" id="email" onChange={handleOnChange} required placeholder='Email' />
                        <textarea name="message" id="message" cols="30" rows="9" onChange={handleOnChange} placeholder='Message' required></textarea>
                        <button type='submit' disabled={Toggle} onClick={onClick} className='f-button button'>{btn.Txt} <span class="material-symbols-outlined">{btn.Icon}</span></button>
                    </form>
                    <h4 className="success" style={{ display: Display.success ? 'flex' : 'none' }}>Thanks for reaching out! Your message was successfully delivered <span className="material-symbols-outlined">task_alt</span></h4>
                </div>

            </div>
        </div>
    )
}

export default Contact
