-- Learn about transactions and their importance in maintaining data integrity in PostgreSQL.
-- Explore stored procedures, functions, and triggers in PostgreSQL.
-- Understand views and their role in providing a virtual representation of data in PostgreSQL.
-- Study advanced SQL features like window functions and common table expressions (CTEs) in PostgreSQL.

-- > Work on a  project where you apply the learned concepts and develop a small database application using PostgreSQL.

-- Personal Finance Management System
-- 1.Schema creation
-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create accounts table
CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    account_name VARCHAR(100) NOT NULL,
    balance DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create categories table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(50) UNIQUE NOT NULL
);

-- Create transactions table
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    account_id INT REFERENCES accounts(id),
    category_id INT REFERENCES categories(id),
    amount DECIMAL(10, 2) NOT NULL,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    description TEXT
);

-- 2.Stored Procedures, Functions, and Triggers - Function to Update Account Balance:
-- Function to update account balance
CREATE OR REPLACE FUNCTION update_balance() RETURNS TRIGGER AS $$
BEGIN
    -- Update the account's balance by adding the transaction amount
    UPDATE accounts
    SET balance = balance + NEW.amount
    WHERE id = NEW.account_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- Trigger to Call the Function:
-- Trigger to call update_balance function after inserting a new transaction
CREATE TRIGGER update_balance_trigger
AFTER INSERT ON transactions
FOR EACH ROW
EXECUTE FUNCTION update_balance();


-- Stored Procedure to Add a Transaction:
-- Stored procedure to add a new transaction
CREATE OR REPLACE PROCEDURE add_transaction(
    p_account_id INT,
    p_category_id INT,
    p_amount DECIMAL(10, 2),
    p_description TEXT
) LANGUAGE plpgsql AS $$
BEGIN
    -- Insert a new transaction with the provided details
    INSERT INTO transactions (account_id, category_id, amount, description)
    VALUES (p_account_id, p_category_id, p_amount, p_description);
END;
$$;


-- View for Transaction Summary:
-- Create a view for transaction summary
CREATE VIEW transaction_summary AS
SELECT 
    t.transaction_date,
    a.account_name,
    c.category_name,
    t.amount,
    t.description
FROM 
    transactions t
JOIN 
    accounts a ON t.account_id = a.id
JOIN 
    categories c ON t.category_id = c.id;


-- View for Account Balances:
-- Create a view for account balances
CREATE VIEW account_balances AS
SELECT 
    a.account_name,
    a.balance
FROM 
    accounts a;

-- Window Functions
-- Running Total of Transactions:
-- Query to calculate the running total of transactions for each account
SELECT 
    t.transaction_date,
    a.account_name,
    SUM(t.amount) OVER (PARTITION BY t.account_id ORDER BY t.transaction_date) AS running_total
FROM 
    transactions t
JOIN 
    accounts a ON t.account_id = a.id
ORDER BY 
    t.account_id, t.transaction_date;


-- Moving Average of Transactions:
-- Query to calculate the moving average of transactions for each account
SELECT 
    t.transaction_date,
    a.account_name,
    t.amount,
    AVG(t.amount) OVER (PARTITION BY t.account_id ORDER BY t.transaction_date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg
FROM 
    transactions t
JOIN 
    accounts a ON t.account_id = a.id
ORDER BY 
    t.account_id, t.transaction_date;


-- Common Table Expressions (CTEs)
-- Monthly Spending Report:
-- CTE to calculate monthly spending
WITH monthly_spending AS (
    SELECT 
        EXTRACT(MONTH FROM transaction_date) AS month, 
        SUM(amount) AS total_spent
    FROM 
        transactions
    GROUP BY 
        month
)
-- Query to select the monthly spending
SELECT 
    month, 
    total_spent
FROM 
    monthly_spending;





