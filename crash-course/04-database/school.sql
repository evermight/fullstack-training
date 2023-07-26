CREATE TABLE school (
  `school_id` int(11),
  `school_name` text,
  `address` text,
  `school_type` text
);

INSERT INTO school (school_id, school_name, address, school_type)
VALUE (1, 'University of Toronto', '5 Steeles Avenue', 'post-secondary');


INSERT INTO school (school_id, school_name, address, school_type)
VALUE (2, 'Harbord Elementary', '23 Bloor Street', 'elementary'),
(3, 'Jarvis Technical School','87 King Street', 'secondary'),
(4, 'Central Business College','189 Steeles Avenue', 'post-secondary'),
(5, 'St. Timothy\'s Catholic School','21 Smith Road', 'secondary');


CREATE TABLE student (
`student_id` int(11),
`first_name` varchar(50),
`last_name` varchar(50),
`dob` smallint(4)
);

INSERT INTO student (student_id, first_name, last_name, dob)
VALUES (1, 'John', 'Lai', 1973),
(2, 'Venus', 'Iss', 1990),
(3, 'Susanne', 'Zhu', 1940)
;

CREATE TABLE course (
`course_id` varchar(3),
`course_name` varchar(50),
`instructor` varchar(50)
);

INSERT INTO course (course_id, course_name, instructor)
VALUES ('CS1', 'Intro to Com Sci', 'Bellamy Gil'),
('HI1', 'World History', 'Adel Smith'),
('EN1', 'English Literature', 'Clancy Brown'),
('MA9', 'Advance Math', 'Teresa May')
;


CREATE TABLE school_student_course (
`course_id` varchar(3),
`student_id` int(11),
`school_id` int (11)
);

INSERT INTO school_student_course (course_id, student_id, school_id)
VALUES ('CS1',1,1),
('HI1', 1, 1),
('EN1', 2, 2),
('MA9', 3, 1),
('CS1', 3, 2);


SELECT school.school_name,
student.student_id,
school_student_course.student_id,
student.first_name
FROM school_student_course
INNER JOIN student ON student.student_id = school_student_course.student_id
INNER JOIN school ON school.school_id = school_student_course.school_id
INNER JOIN course ON course.course_id = school_student_course.course_id
WHERE first_name LIKE '%ne%'
OR dob > 1970
ORDER BY dob;