import { useContext } from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div>
        <section>
          <h2>Contact Us</h2>
          <p>Please use the form below to get in touch with us.</p>
        </section>
      </div>
      <section>
        <div className="contact-container">
          <h3>Contact Form</h3>
          <form action="#" method="post">
            <label htmlFor="name">Name:</label>
            <input htmlFor="text" id="name" name="name" required></input>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required></input>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
