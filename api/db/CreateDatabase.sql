USE api;

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(30) NOT NULL,
    course_price DECIMAL(10,2) NOT NULL
);

INSERT INTO courses (course_name, course_price) VALUES ('Java', 1200.00);
INSERT INTO courses (course_name, course_price) VALUES ('Angular', 900.00);