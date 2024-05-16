// app/server.js
const express = require("express");
const { Pool } = require("pg");
const app = express();

// PostgreSQL Connection Configuration
const pool = new Pool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "postgres", // PostgreSQL default superuser
  password: process.env.DB_PASSWORD || "my_password", // Change this to your PostgreSQL password
  database: process.env.DB_NAME || "my_database",
  port: process.env.DB_PORT || 5432, // PostgreSQL default port
});

// Connect to PostgreSQL
pool.connect((err) => {
  if (err) {
    console.error("Error connecting to PostgreSQL:", err);
    return;
  }
  console.log("Connected to PostgreSQL database");
});

// Define API routes
app.get("/", (req, res) => {
  // Example query
  pool.query("SELECT * FROM my_table", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.json(results.rows);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
