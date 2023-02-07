CREATE DATABASE company;

CREATE TABLE employees(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    lastname VARCHAR(50),
    age VARCHAR(50),
    rol VARCHAR(50),
    photo VARCHAR(100),
    description VARCHAR(50),
    email VARCHAR(100)
);

INSERT INTO
    employees(
        name,
        lastname,
        age,
        rol,
        photo,
        description,
        email
    )
VALUES
    (
        'johan sebastian',
        'castro garcia',
        '18',
        'admin',
        'https://robohash.org/catro',
        'Hi i am admin , nice to met too !',
        'sebastian@gmail.com'
    );

SELECT
    *
FROM
    employees;