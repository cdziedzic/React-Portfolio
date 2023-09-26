import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageField, setMessageField] = useState('');
  const [messageError, setMessageError] = useState('')
  const [isMessageActive, setIsMessageActive] = useState(false)
  const onFocus = () => setIsMessageActive(true)
const onBlur = () => setIsMessageActive(false)

  // Function to handle email input and validation
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (!value) {
      setEmailError('E-mail is required');
    }
    else if (!isValidEmail(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };
  const handleMessageChange = (event) => {
    const value = event.target.value;
    setMessageField(value);
      if (!value) {
        setMessageError('Message is required');
      }
      else {
        setMessageError('');
      }
    
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    // Additional validation logic for other fields can be added here

    // If email is valid, you can proceed with form submission
    if (isValidEmail(email)) {
      // Handle form submission here
      console.log('Form submitted successfully');
    } else {
      setEmailError('Invalid email address');
    }
  };
 
  // Function to check if the email address is valid
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };


  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <span style={{ color: 'red' }}>{emailError}</span>
        <br />
        <label htmlFor="messageField">Message:</label>
        <p>Message Field is Active: {isMessageActive ? 'Yes' : 'No'}</p>
        <input
          type="text"
          id="messageField"
          name="messageField"
          onBlur={onBlur}
          onFocus={onFocus}
          value={messageField}
          onChange={handleMessageChange}
        />
        <span style={{ color: 'red' }}>{messageError}</span>
        <br />
        <input type="submit" value="Submit" />
      </form>
     
    </div>
  );
}

