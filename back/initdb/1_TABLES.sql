/*create table students
(
    id SERIAL PRIMARY KEY,
    first_name TEXT not null,
    last_name TEXT not null,
    birthdate date null,
    major_id int null,
    image bytea null
);

create table majors
(
    id SERIAL PRIMARY KEY,
    name TEXT not null,
    description TEXT not null
);

create table courses
(
    id SERIAL PRIMARY KEY,
    name TEXT not null,
    hours int not null
);

create table student_course
(
    id SERIAL PRIMARY KEY,
    student_id int not null,
    course_id int not null
);*/

create table player
(
    id_player SERIAL PRIMARY KEY,
    pseudo TEXT not null,
    score INT not null,
    classement INT not null
);

create table admin
(
    id_admin SERIAL PRIMARY KEY,
    name TEXT not null
);

create table category
(
    id_category SERIAL PRIMARY KEY,
    cat_name TEXT not null
);

create table question
(
    id_question SERIAL PRIMARY KEY,
    id_cat SERIAL REFERENCES category(id_category),
    id_res SERIAL REFERENCES response(id_response),
    name_img TEXT not null
);

create table response
(
    id_response SERIAL PRIMARY KEY,
    resp1 TEXT not null,
    resp2 TEXT not null,
    resp3 TEXT not null,
    good_resp TEXT not null
);

create table Game
(
    id_game SERIAL PRIMARY KEY,
    id_p1 SERIAL REFERENCES player(id_player),
    id_p2 SERIAL REFERENCES player(id_player),
    id_p3 SERIAL REFERENCES player(id_player),
    id_p4 SERIAL REFERENCES player(id_player),
    id_cat SERIAL REFERENCES category(id_category)
);


alter sequence students_id_seq restart 10000 increment by 50;
alter sequence admin_id_seq restart 10000 increment by 50;
alter sequence category_id_category_seq restart 10000 increment by 50;
alter sequence player_id_player_seq restart 10000 increment by 50;
alter sequence question_id_question_seq restart 10000 increment by 50;
alter sequence response_id_response_seq restart 10000 increment by 50;
