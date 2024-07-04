CREATE TABLE members (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(20),
    category VARCHAR(50),
    level VARCHAR(50),
    age_group VARCHAR(50),
    guardian_name VARCHAR(100),
    guardian_contact VARCHAR(100)
);

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    date TIMESTAMP NOT NULL,
    category VARCHAR(50),
    level VARCHAR(50),
    age_group VARCHAR(50),
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE registrations (
    id SERIAL PRIMARY KEY,
    member_id INT REFERENCES members(id),
    event_id INT REFERENCES events(id),
    payment_status BOOLEAN DEFAULT FALSE,
    attendance BOOLEAN DEFAULT FALSE
);
