-- students
--   id
--   full_name
--   age
--   created_date
--   updated_date

select * from students where age >= 20;

create index students_age on students (age);

select * from students where full_name like '%a%';
select * from students where locate('a', item) > 0;
