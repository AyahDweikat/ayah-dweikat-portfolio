import React from 'react'
import './contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <p>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <div className="contact-sections">
          <form className="contact-form">
            <div className="name-email-input">
              <div className="control-form">
                <input type="text" id="name" name="name" placeholder="Name" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="control-form">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="control-form">
              <input
                className="subject-input"
                type="subject"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
              <label className="subject-label" htmlFor="subject">
                Subject
              </label>
            </div>
            <div className="control-form">
              <textarea
                className="massage-input"
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Message"
                defaultValue={""}
              />
              <label htmlFor="message">Message</label>
            </div>
            <button>Send Message!</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact