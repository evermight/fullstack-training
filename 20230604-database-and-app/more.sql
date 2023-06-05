

INSERT INTO student (student_id, student_name, dob)

VALUES
(3, 'Thomas', 2003),
(4, 'Rohit', 1934),
(5, 'Chi', 2014),
(6, 'David', 1912),
(7, 'Abraham', 1945);

DELETE FROM student WHERE student_id = 7;


UPDATE student SET dob = 1959, student_name = 'Hamza A' WHERE student_id = 2;