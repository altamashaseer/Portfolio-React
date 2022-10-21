import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='c-container'>
            <h3 className="heading p-heading">Contact 📱</h3>
            <div className="c-wrapper">
                <div className="left">
                    <div className="c-options">
                        <div className="email card">
                            <i class="fa-regular fa-envelope"></i>
                            <h4>Email</h4>
                            <a href="mailto:altamashaseer9@gmail.com" target='_blank' rel="noreferrer"><h5>altamashaseer9@gmail.com</h5></a>
                            <a href="mailto:altamashaseer@gmail.com" target='_blank' rel="noreferrer"><h5>altamashaseer@gmail.com</h5></a>
                        </div>
                        <div className="phone card">
                            <i class="fa-solid fa-phone"></i>
                            <h4>Phone</h4>
                            <a href="tel:+919997340479"><h5>+91 9997340479</h5></a>
                        </div>
                        <div className="email card">
                            <i class="fa-brands fa-linkedin"></i>
                            <h4>LinkedIn</h4>
                            <a href="https://www.linkedin.com/in/altamash-aseer-746aa3193/" target='_blank' rel="noreferrer"><h5>altamashaseer</h5></a>
                        </div>
                    </div>

                    <div className="right">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
