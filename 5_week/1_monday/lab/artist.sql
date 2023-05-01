-- 1. Add 3 new artists to the artist table. (It already exists.)

INSERT INTO artist (name)
VALUES
    ('Dave Matthews Band'),
    ('BTS')

-- 2. Select 10 artists in reverse alphabetical order.

SELECT *
FROM artist
ORDER BY artist DESC
LIMIT 10;

-- 3. Select 5 artists in alphabetical order.
SELECT *
FROM artist
ORDER BY artist
LIMIT 5;


-- 4. Select all artists that start with the word ‘Black’.

SELECT *
FROM artist
WHERE name LIKE 'Black%'


-- 5. Select all artists that contain the word ‘Black’.

SELECT *
FROM artist
WHERE name LIKE '%Black%'
