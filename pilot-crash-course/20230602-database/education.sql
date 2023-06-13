create table school (
  `school_id` int(11),
  `school_name` text,
  `address` text,
  `minimum_age` int(11),
  `maximum_age` int(11)
);


insert into school (school_id, school_name, address, minimum_age, maximum_age)
values (1, 'Harbord Elementary', '1 Yonge', 6, 12);

insert into school (school_id, school_name, address, minimum_age, maximum_age)
values (2, 'University of Tornto', '1 Yonge', 17, 999999);

insert into school (school_id, school_name, address, minimum_age, maximum_age)
values (3, 'Central Tech', '1 Yonge', 17, 999999),
(4, 'Jarvis Collegiate', '1 Yonge', 17, 999999),
(5, 'New York Yniversity', '1 Yonge', 17, 999999),
(6, 'MIT', '1 Yonge', 17, 999999)
;


select * from school;

select school_name, address from school;

select school_name, address from school where minimum_age >6;

select school_name, address from school where school_name like '%ersit%';


create table student (
  `student_id` int(11),
  `student_name` text,
  `dob` int(4)
);


create table course (
  `course_id` int(11),
  `course_name` text,
  `instructor` text
);

INSERT into student (student_id, student_name, dob) values
(1, 'John', 1980),
(2, 'Hamza', 1960);

INSERT into course (course_id, course_name, instructor) values
(1, 'Algebra', 'Joe'),
(2, 'History', 'Bellamy');


create table student_school_course (
  `student_id` int(11),
  `course_id` int(11),
  `school_id` int(11)
);


INSERT into student_school_course (course_id, student_id, school_id) VALUES
(1, 1, 1),
(1, 2, 1),
(2, 1, 1);





SELECT * FROM student_school_course
INNER JOIN student ON student_school_course.student_id = student.student_id
INNER JOIN course ON student_school_course.course_id = course.course_id
INNER JOIN school ON student_school_course.school_id = school.school_id
WHERE student.dob > 1970;











