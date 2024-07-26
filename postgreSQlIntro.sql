-- Create a table called "Employees" with columns for "EmployeeID" (integer), "FirstName" (text), "LastName" (text), and "Age" (integer).
CREATE TABLE employees(
  	employeeid serial primary key,
	firstname text,
	lastname text,
	age int
);

-- Insert three records into the "Employees" table with the following data:
insert into employees (firstname, lastname, age) values 
('John', 'Doe', 25),
('Jane', 'Smith', 30),
('Mike', 'Johnson', 35);

-- Retrieve all records from the "Employees" table.
select * from employees;

-- Retrieve only the "FirstName" and "LastName" columns from the "Employees" table.
select firstname,lastname from employees;

-- Retrieve the record(s) from the "Employees" table where the "Age" is greater than 28.
select * from employees where age > 28;

-- Update the record in the "Employees" table where the "EmployeeID" is 2, and change the "Age" to 32.
update employees set age = 32 where employeeid = 2;

-- Delete the record from the "Employees" table where the "EmployeeID" is 3.
delete from employees where employeeid = 3;

-- Create a table called "Customers" with columns for "CustomerID" (integer), "FirstName" (text), "LastName" (text), and "City" (text).
CREATE TABLE customers(
    customerid serial primary key,
    firstname text,
    lastname text,
    city text
);

-- Insert two records into the "Customers" table with the following data
insert into customers (firstname,lastname,city) values
('Michael', 'Brown', 'New York'),
('Emily', 'Johnson', 'Los Angeles');

-- Retrieve all records from the "Customers" table where the "City" is 'New York'.
select * from customers where city = 'New York';

-- Join the "Employees" and "Customers" tables based on the "LastName" column and retrieve all records where the last name matches.
select e.*,c.* from employees e inner join customers c on e.lastname=c.lastname;

-- Calculate the average age of all employees in the "Employees" table.
select round(avg(age), 2) as average_age from employees;

-- Calculate the total number of employees in the "Employees" table.
select count(*) as total_emp from employees;


