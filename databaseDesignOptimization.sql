-- Explore the concepts of database normalization and denormalization.
-- Normalized tables :
-- Students Table
CREATE TABLE Students (
    StudentID SERIAL PRIMARY KEY,
    StudentName TEXT,
    Age INT
);

-- Teachers Table
CREATE TABLE Teachers (
    TeacherID SERIAL PRIMARY KEY,
    TeacherName TEXT,
    Subject TEXT
);

-- Courses Table
CREATE TABLE Courses (
    CourseID SERIAL PRIMARY KEY,
    CourseName TEXT,
    TeacherID INT REFERENCES Teachers(TeacherID)
);

-- Enrollments Table
CREATE TABLE Enrollments (
    EnrollmentID SERIAL PRIMARY KEY,
    StudentID INT REFERENCES Students(StudentID),
    CourseID INT REFERENCES Courses(CourseID)
);
-- Query to retrieve student enrollments
SELECT 
    s.StudentName, 
    c.CourseName, 
    t.TeacherName, 
    t.Subject
FROM 
    Enrollments e
INNER JOIN 
    Students s ON e.StudentID = s.StudentID
INNER JOIN 
    Courses c ON e.CourseID = c.CourseID
INNER JOIN 
    Teachers t ON c.TeacherID = t.TeacherID;

-- Denormalized Table
CREATE TABLE StudentCourseInfo (
    EnrollmentID SERIAL PRIMARY KEY,
    StudentName TEXT,
    Age INT,
    CourseName TEXT,
    TeacherName TEXT,
    Subject TEXT
);

-- Understand primary keys, foreign keys, and relationships between tables in PostgreSQL.
CREATE TABLE Authors (
    AuthorID SERIAL PRIMARY KEY,        
    Name TEXT NOT NULL
);

CREATE TABLE Books (
    BookID SERIAL PRIMARY KEY,            -- Primary Key
    Title TEXT NOT NULL,
    AuthorID INT,                         -- Foreign Key
    FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID)  -- Foreign Key Constraint without custom name
);

CREATE TABLE Borrowers (
    BorrowerID SERIAL PRIMARY KEY,        -- Primary Key
    Name TEXT NOT NULL,
    Email TEXT UNIQUE NOT NULL
);

CREATE TABLE BookLoans (
    LoanID SERIAL PRIMARY KEY,            -- Primary Key
    BookID INT,                           -- Foreign Key
    BorrowerID INT,                       -- Foreign Key
    LoanDate DATE NOT NULL,
    ReturnDate DATE,
    FOREIGN KEY (BookID) REFERENCES Books(BookID),        -- Foreign Key Constraint without custom name
    FOREIGN KEY (BorrowerID) REFERENCES Borrowers(BorrowerID)  -- Foreign Key Constraint without custom name
);

-- Learn about indexing and its impact on query performance in PostgreSQL.
-- Indexing speeds up data retrieval by not scanning every row but slower write operations

-- Identify and optimize slow-performing queries using techniques like query optimization and indexing in PostgreSQL.
EXPLAIN ANALYZE --Execution plan and time taken for each step, helping identify where the performance bottlenecks are.
EXPLAIN ANALYZE SELECT * FROM employees;

-- Creating pg_stat-statements extension module
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

-- This provides information about the current state of active queries.
SELECT pid, query, state, wait_event_type, wait_event
FROM pg_stat_activity
WHERE state = 'active';

-- Indexes speed up data retrieval operations but may slow down write operations.
CREATE INDEX idx_age ON employees (age);
SELECT * 
FROM pg_indexes 
WHERE tablename = 'employees' AND indexname = 'idx_age';
-- List of all indexes
SELECT * 
FROM pg_indexes 
WHERE tablename = 'employees';
-- Speeds up
EXPLAIN ANALYZE SELECT * FROM employees WHERE age > 30;

-- Dropping an index
DROP INDEX IF EXISTS idx_age;

-- Practice designing a simple database schema and optimizing queries based on the schema using PostgreSQL.
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE accounts (
    account_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    account_name VARCHAR(100) NOT NULL,
    account_type VARCHAR(50) NOT NULL,  -- e.g., Checking, Savings, Credit Card
    balance DECIMAL(10, 2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) UNIQUE NOT NULL
);
CREATE TABLE transactions (
    transaction_id SERIAL PRIMARY KEY,
    account_id INT REFERENCES accounts(account_id) ON DELETE CASCADE,
    category_id INT REFERENCES categories(category_id),
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    description TEXT,
    amount DECIMAL(10, 2) NOT NULL,
    transaction_type VARCHAR(50) CHECK (transaction_type IN ('income', 'expense'))
);
-- Optimize the schema
CREATE INDEX idx_user_id ON accounts(user_id);
CREATE INDEX idx_account_id ON transactions(account_id);
CREATE INDEX idx_category_id ON transactions(category_id);
CREATE INDEX idx_transaction_date ON transactions(transaction_date);

-- Inserting
INSERT INTO users (username, email, hashed_password) VALUES ('john_doe', 'john@example.com', 'hashed_password123');

INSERT INTO accounts (user_id, account_name, account_type, balance) VALUES (1, 'Main Checking', 'Checking', 1000.00);

INSERT INTO categories (category_name) VALUES ('Groceries'), ('Salary'), ('Rent');

INSERT INTO transactions (account_id, category_id, transaction_date, description, amount, transaction_type)
VALUES (1, 1, '2024-07-29', 'Walmart Purchase', -50.00, 'expense'),
       (1, 2, '2024-07-29', 'Monthly Salary', 2000.00, 'income');

-- Select query with joins
SELECT 
    t.transaction_id, 
    a.account_name, 
    c.category_name, 
    t.transaction_date, 
    t.description, 
    t.amount, 
    t.transaction_type
FROM 
    transactions t
INNER JOIN 
    accounts a ON t.account_id = a.account_id
INNER JOIN 
    categories c ON t.category_id = c.category_id
WHERE 
    a.user_id = 1;

















