import "./FormStyles.css";
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [name, setName] = useState('');
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3001/contact', {
                to: to,
                subject: subject,
                text: 
                "Your Message received! \n" +
                "Name: " + name + "\n" +
                "Email: " + to + "\n" +
                "Message: " + text
            });
            setMessage('Email sent successfully');
        } catch (error) {
            setMessage('Error: Sending email');
            console.error(error);
        }

        //-----------------------TO MYSELF !
        try {
            await axios.post('http://localhost:3001/contact', {
                to: import.meta.env.VITE_MY_EMAIL,
                subject: subject,
                text: "Name: " + name + "\n" +
                    "Email: " + to + "\n" +
                    "Message: " + text
            });
        } catch (error) {
            console.error(error);
        }
        //-----------------------TO MYSELF !
    };

    return (
        <div>
            <div className="text-content">
                {message && <h4>{message}</h4>}
            </div>
            <form onSubmit={handleSubmit}>
                <label>Your Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label>Your Email</label>
                <input type="email" value={to} onChange={(e) => setTo(e.target.value)} />
                <label>Subject</label>
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                <label>Message </label>
                <textarea rows="6" placeholder="Type your message here" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form



//and also I create sending mail part with using Email.js without using backend!
/*
import "./FormStyles.css";
import React, { useState } from 'react';
import axios from 'axios';


const Form = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          await axios.post('http://localhost:3001/contact', {
              to: to,
              subject: subject,
              text: text
          });
          setMessage('Email sent successfully');
      } catch (error) {
          setMessage('Error sending email');
          console.error(error);
      }
  };

  return (
      <div>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
              <label>To:</label>
              <input type="email" value={to} onChange={(e) => setTo(e.target.value)} />
              <label>Subject:</label>
              <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
              <label>Message:</label>
              <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
              <button className="btn" type="submit">Send Email</button>
          </form>
          {message && <p>{message}</p>}
      </div>
  );
}

export default Form
*/