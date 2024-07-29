-- Insert a new record into the "Employees" table with the following data: EmployeeID: 4, FirstName: 'Sarah', LastName: 'Wilson', Age: 28.
insert into employees (firstname,lastname,age) values ('Sarah','Wilson',28);

-- Update the "Age" of the employee with EmployeeID 1 in the "Employees" table to 26.
update employees set age=26 where employeeid=1;

-- Delete the record from the "Customers" table where the CustomerID is 2.
delete from customers where customerid=2;

-- Insert a new record into the "Customers" table with the following data: CustomerID: 3, FirstName: 'Robert', LastName: 'Davis', City: 'Chicago'.
insert into customers (firstname,lastname,city) values ('Robert','Davis','Chicago');

-- Update the "City" of the customer with CustomerID 1 in the "Customers" table to 'San Francisco'.
update customers set city='San Francisco' where customerid=1;

-- Delete all records from the "Employees" table where the "Age" is less than 30.
delete from employees where age < 30;

-- Insert multiple records into the "Customers" table in a single statement. The records should have the following data:
insert into customers (firstname,lastname,city) values
('Michelle','Anderson','Houston'),
('William','Thompson','New York');

-- Update the "LastName" of the employee with EmployeeID 3 in the "Employees" table to 'Brown'.
update employees set lastname='Brown' where employeeid=3;

-- Delete all records from the "Customers" table.
delete from customers;

-- Insert a new record into the "Employees" table with the following data: EmployeeID: 5, FirstName: 'Emily', LastName: 'Jones', Age: 32.
insert into employees (firstname,lastname,age) values ('Emily','Jones',32);

-- Update the "City" of all customers in the "Customers" table to 'Seattle'.
update customers set city='Seattle';

-- Delete the record from the "Employees" table where the EmployeeID is 4.
delete from employees where employeeid=4;

-- Insert a new record into the "Customers" table with the following data: CustomerID: 6, FirstName: 'Daniel', LastName: 'Wilson', City: 'Los Angeles'.
insert into customers (firstname,lastname,city) values ('Daniel','Wilson','Los Angeles');

