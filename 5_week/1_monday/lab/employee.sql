-- 1. List all employee first and last names only that live in Calgary.

SELECT
    first_name,
    last_name

FROM 
    employee

WHERE
    city = 'Calgary';

-- 2. Find the birthdate for the youngest employee.

SELECT birth_date
FROM employee
ORDER BY birth_date DESC
LIMIT 1;

SELECT MAX(birth_date) FROM employee;

-- 3. Find the birthdate for the oldest employee.

SELECT birth_date
FROM employee
ORDER BY birth_date
LIMIT 1;

SELECT MIN(birth_date) FROM employee;

-- 4. Find everyone that reports to Nancy Edwards (use the ReportsTo column). 
-- * You will need to query the employee table to find the id for Nancy Edwards

SELECT *
FROM employee
WHERE 
    first_name = 'Nancy'


SELECT 
    first_name,
    last_name

FROM
    employee

WHERE
    reports_to = 2;


-- 5. Count how many people live in Lethbridge.

SELECT COUNT(*)
FROM employee
WHERE city = 'Lethbridge'