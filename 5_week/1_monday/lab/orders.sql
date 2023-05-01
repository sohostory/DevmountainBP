-- 1. Create a table called orders that records: order_id, person_id, product_name, product_price, quantity.
CREATE TABLE orders (
    order_id INTEGER,
    person_id INTEGER,
    product_name VARCHAR(50),
    product_price DECIMAL,
    quantity INTEGER
)


-- 2. Add 5 orders to the orders table.
    -- Make orders for at least two different people.
    -- person_id should be different for different people.

INSERT INTO orders (order_id, person_id, product_name, product_price, quantity)
VALUES
    (1234, 412, 'Dyson', 159.99, 2),
    (1235, 129, 'Shark', 119.99, 3);

-- 3. Select all the records from the orders table.

SELECT *
FROM orders;

-- 4. Calculate the total number of products ordered.

SELECT SUM(quantity)
FROM orders;

-- 5. Calculate the total order price.

SELECT SUM(quantity * product_price) AS TOTAL
FROM orders;


-- 6. Calculate the total order price by a single person_id.

SELECT *, quantity * product_price AS TOTAL
FROM orders;