-- Perform an inner join between the "Employees" and "Customers" tables using the "LastName" column, and retrieve the FirstName and City of the matching records.
select e.firstname,c.firstname,c.city from employees e inner join customers c on e.lastname=c.lastname;

-- Write a query to retrieve all employees who are not present in the "Customers" table using a left outer join.
select e.* from employees e left join customers c on e.firstname = c.firstname and e.lastname = c.lastname where c.firstname is null and c.lastname is null;

-- Find the total count of customers from each city using a GROUP BY clause.
select city,count(*) from customers group by city;

-- Retrieve the average age of employees who have made a purchase. Combine a subquery with an aggregate function to solve this.
select ROUND(AVG(e.age),2) AS average_age from employees e where 
e.employeeid in (
    select distinct c.employeeid
    from customers c
    inner join purchases p on c.customerid = p.customerid
);

-- Find the total number of customers and the sum of their purchases for each city using a join, subquery, and aggregate functions.
select
    c.city,
    COUNT(c.customerid) AS total_customers,
    COALESCE(SUM(p.total_amount), 0) AS total_purchases
from
    customers c
left join (
    select 
        customerid, 
        SUM(amount) AS total_amount
    from 
        purchases
    group by 
        customerid
) p on c.customerid = p.customerid
group by
    c.city;

-- Write a query to retrieve the names and ages of employees who have made a purchase and whose age is above the average age of all employees.
select 
    e.firstname,
    e.lastname,
    e.age
from 
    employees e
where 
    e.age > (
        select AVG(age)
        from employees
    )
and 
e.employeeid in(
    select distinct c.employeeid
    from customers c
    inner join purchases p on c.customerid=p.customerid
);

-- Perform a right outer join between the "Customers" and "Employees" tables using the "LastName" column and retrieve the FirstName and LastName of the matching records.
select 
    c.firstname as customer_firstname, 
    c.lastname as customer_lastname, 
    e.firstname as employee_firstname, 
    e.lastname as employee_lastname
from 
    customers c
right outer join 
    employees e
on 
    c.lastname = e.lastname;

-- Find the highest purchase amount made by each customer using a subquery and aggregate function.
select 
    c.firstname,
    c.lastname,
    p.highest_purchase_amount
from 
    customers c
join 
    (select 
        customerid,
        MAX(amount) as highest_purchase_amount
    from 
        purchases
    group by 
        customerid) p
on 
    c.customerid = p.customerid;

-- Retrieve the names of customers who have not made any purchases using a subquery and a left outer join.
select 
    c.firstname, 
    c.lastname
from 
    customers c
left join 
    (select distinct customerid from purchases) p 
on 
    c.customerid = p.customerid
where 
    p.customerid is null;

-- Write a query to calculate the average age of employees for each city they belong to using a join, subquery, and GROUP BY clause.
select 
    c.city, 
    ROUNd(AVG(e.age),2) as average_age
from 
    employees e
join 
    (select distinct employeeid, city from customers) c
on 
    e.employeeid = c.employeeid
group by 
    c.city;







