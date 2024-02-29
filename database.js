import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import env from "dotenv";

import cors from 'cors';

const app = express();
const port = process.env.PG_PORT || 3000;
const saltRounds = 10;
env.config();

app.use(bodyParser.json());
app.use(cors());
//Client 
const db = new pg.Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

app.post("/register", async (req, res) => {

  const { email, password } = req.body;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      return res.json({ success: false, message: 'Email already exists. Try logging in.' });
    } else {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
          return res.status(401).json({ success: false, message: 'Error comparing passwords.' });
        } else {
          console.log("Hashed Password:", hash);
          await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2)",
            [email, hash]
          );
          return res.json({ success: true, message: 'Registration successful' });        }
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let loginPassword = password;

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;

      bcrypt.compare(loginPassword, storedHashedPassword, (err, result) => {
        if (err) {
          return res.status(401).json({ success: false, message: 'Error comparing passwords.' });
        } else {
          if (result) {
            return res.json({ success: true, message: 'Login successful.' });
          } else {
            return res.json({ success: false, message: 'Incorrect password.' });          }
        }
      });

      
    } else {
      return res.json({ success: false, message: 'Email does not exists.' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: 'Server error.' });
  }
});

app.listen(port, () => {
  console.log(`Authentication server running on port ${port}`);
});


//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
import nodemailer from 'nodemailer';

const app1 = express();
const port1 = 3001;

app1.use(bodyParser.json());
app1.use(cors());

app1.post('/contact', (req, res) => {
    const { to, subject, text } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.VITE_MY_EMAIL,
            pass: process.env.MY_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.VITE_MY_EMAIL,
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});

app1.listen(port1, () => {
  console.log(`Email server running on port ${port1}`);
});
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
