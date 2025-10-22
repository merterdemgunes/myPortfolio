import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import env from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";

env.config();

const app = express();
const port = process.env.PORT || 3000;
const saltRounds = 10;

app.use(bodyParser.json());
app.use(cors());

// PostgreSQL bağlantısı
const db = new pg.Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  ssl: {
    rejectUnauthorized: false, // Neon bağlantısı için gerekli
  },
});

db.connect()
  .then(() => console.log("✅ Connected to Neon PostgreSQL successfully"))
  .catch((err) => console.error("❌ Database connection error:", err));

// REGISTER
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkResult = await db.query("SELECT * FROM user_data WHERE email = $1", [email]);

    if (checkResult.rows.length > 0) {
      return res.json({ success: false, message: "Email already exists. Try logging in." });
    }

    const hash = await bcrypt.hash(password, saltRounds);
    await db.query("INSERT INTO user_data (email, password) VALUES ($1, $2)", [email, hash]);
    return res.json({ success: true, message: "Registration successful" });

  } catch (err) {
    console.error("Error in register:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await db.query("SELECT * FROM user_data WHERE email = $1", [email]);
    if (result.rows.length === 0) {
      return res.json({ success: false, message: "Email does not exist." });
    }

    const user = result.rows[0];
    const valid = await bcrypt.compare(password, user.password);

    if (valid) {
      return res.json({ success: true, message: "Login successful." });
    } else {
      return res.json({ success: false, message: "Incorrect password." });
    }

  } catch (err) {
    console.error("Error in login:", err);
    return res.status(500).json({ success: false, message: "Server error." });
  }
});

app.listen(port, () => {
  console.log(`🚀 Authentication server running on port ${port}`);
});

// ---------------------- EMAIL SERVER ----------------------

const mailApp = express();
const mailPort = 3001;

mailApp.use(bodyParser.json());
mailApp.use(cors());

mailApp.post("/contact", (req, res) => {
  const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.VITE_MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.VITE_MY_EMAIL,
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

mailApp.listen(mailPort, () => {
  console.log(`📧 Email server running on port ${mailPort}`);
});