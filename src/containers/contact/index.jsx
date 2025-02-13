import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import emailjs from 'emailjs-com';
import "./styles.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const validate = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.description.trim()) {
      errors.description = 'Description is required';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      const emailData = {
        from_name: formData.name,
        from_email: formData.email, // Pass email as from_email to use it in the template
        description: formData.description,
      };
      
      emailjs.send('service_vzdrr5q', 'template_vlejjwo', emailData, '6DdIHM0EOFl8p72kF')
        .then((result) => {
          setConfirmationMessage(
            alert("Message sent successfully!")
          );
          // setTimeout(() => {
          //   setConfirmationMessage('');
          // }, 5000); // Clear the message after 5 seconds
        }, (error) => {
          console.log('Error sending email:', error.text);
          setConfirmationMessage("There was an error sending your message. Please try again.");
        });

      // Clear form data
      setFormData({
        name: '',
        email: '',
        description: ''
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        
        <form onSubmit={handleSubmit}>
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
                {formErrors.name && <span className="error">{formErrors.name}</span>}
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"email"}
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
                {formErrors.email && <span className="error">{formErrors.email}</span>}
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  value={formData.description}
                  onChange={handleChange}
                  type={"text"}
                  rows="5" 
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
                {formErrors.description && <span className="error">{formErrors.description}</span>}
              </div>
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
        
        {confirmationMessage && (
          <div id="confirmation" className={confirmationMessage.includes('success') ? 'success' : 'error'}>
            {confirmationMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
