CREATE TABLE IF NOT EXISTS my_table (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
INSERT INTO my_table (name, email) VALUES ('John Doe', 'john@example.com');
INSERT INTO my_table (name, email) VALUES ('Jane Smith', 'jane@example.com');
INSERT INTO my_table (name, email) VALUES ('Alice Johnson', 'alice@example.com');
