import { useState } from "react";

export default function RequestInfo() {
  //state variables for error and submit handling
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageField, setMessageField] = useState('');
  const [isMessageActive, setIsMessageActive] = useState(true)
  //set focus status for message input box
  const onFocus = () => setIsMessageActive(true)
  const onBlur = () => setIsMessageActive(false)

  //function to handle name input
  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  // Function to handle email input and validation
  const handleEmailChange = (event) => {
    const value = event.target.value;
    //check if email has text and is valid or display error
    if (!value) {
      setEmailError('E-mail is required');
    }
    else if (!isValidEmail(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
    setEmail(value);
  };
  //function for message change
  const handleMessageChange = (event) => {
    const value = event.target.value;
    console.log(value)
    setMessageField(value);
    
  };

//handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

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
      <h1>Contact me</h1>
      <form onSubmit={handleSubmit}>
      {/* name input */}
      <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        {/* email input */}
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
        {/* enter message field */}
        <input
          type="text"
          id="messageField"
          name="messageField"
          onBlur={onBlur}
          onFocus={onFocus}
          value={messageField}
          onChange={(event)=>handleMessageChange(event)}
        />
        {/* check for a message in the message input field and display error if none and field is inactive */}
        {!isMessageActive && messageField === ""? <span style={{ color: 'red' }}>message is required</span> : ""}
        <br />
        {/* submit button */}
        <input type="submit" value="Submit" />
      </form >

    </div>
  );
}

