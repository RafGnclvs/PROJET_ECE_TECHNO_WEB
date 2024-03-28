/*INSERT INTO majors (id, name, description) VALUES (1, 'Ingéniérie du Numérique', 'Ouaiiis du code partout');
INSERT INTO majors (id, name, description) VALUES (2, 'Structure & Matériaux', 'Beaucoup de béton et des poutres (snif elle a été renomée)');
INSERT INTO majors (id, name, description) VALUES (3, 'Aéronautique & Espace', 'Vive le vent');
INSERT INTO majors (id, name, description) VALUES (4, 'Data Engineering', 'Trop cool plein de données à ordonner');
INSERT INTO majors (id, name, description) VALUES (5, 'Energie & Environnement', 'On est full green');
INSERT INTO majors (id, name, description) VALUES (6, 'Engineering Management', 'Des managers de qualité');
INSERT INTO majors (id, name, description) VALUES (7, 'Ingénierie & Santé', 'On connait tous les os et tous les muscles du corps humain');
INSERT INTO majors (id, name, description) VALUES (8, 'Ingénierie & Architecture durable', 'Objectif 0 carbon');
INSERT INTO majors (id, name, description) VALUES (9, 'Design Industriel Durable', 'Ca existait pas pour la P2022 ça');

INSERT INTO students (id, first_name, last_name, birthdate, major_id) VALUES (1, 'Paul', 'Harrohide', '2002-06-15', 1);
INSERT INTO students (id, first_name, last_name, birthdate, major_id) VALUES (2, 'Jean', 'Bonbeur', '2001-08-21', 1);
INSERT INTO students (id, first_name, last_name, birthdate, major_id) VALUES (3, 'Alain', 'Térieur', '2000-01-11', 1);

INSERT INTO courses (id, name, hours) VALUES (1, 'Spanish', 30);
INSERT INTO courses (id, name, hours) VALUES (2, 'German', 30);
INSERT INTO courses (id, name, hours) VALUES (3, 'Internet of Things', 30);
INSERT INTO courses (id, name, hours) VALUES (4, 'Thermodynamic', 30);
INSERT INTO courses (id, name, hours) VALUES (5, 'Anatomy', 30);
INSERT INTO courses (id, name, hours) VALUES (6, 'Maths', 30);
INSERT INTO courses (id, name, hours) VALUES (7, 'Java', 30);
INSERT INTO courses (id, name, hours) VALUES (8, 'Lean Management', 30);
INSERT INTO student_course (id, student_id, course_id) VALUES (1, 1, 7);*/

/*INSERT INTO player (id_player, pseudo, score, classement) VALUES (1, 'leti', 0,0);
INSERT INTO player (id_player, pseudo, score, classement) VALUES (2, 'ghita', 0,0);
INSERT INTO player (id_player, pseudo, score, classement) VALUES (3, 'raf', 0,0);

INSERT INTO admin (id_admin, name) VALUES (1, 'mouss');

INSERT INTO category (id_category, cat_name) VALUES (1, 'series');
INSERT INTO category (id_category, cat_name) VALUES (2, 'movies');
INSERT INTO category (id_category, cat_name) VALUES (3, 'animes');*/

/*

INSERT INTO response (id_response, resp1, resp2, resp3,good_resp) VALUES
                                                                    (1,'Tony Soprano','Dexter Morgan','Rick Grimes','Walter White'),
                                                                    (2,'Barney Stinson','Leslie Knope','Liz Lemon','Michael Scott'),
                                                                    (3,'Claire Underwood','Olivia Pope','Peggy Olson','Daenerys Targaryen'),
                                                                    (4,'Marshall Eriksen','Abed Nadir','Phil Dunphy','Sheldon Cooper'),
                                                                    (5,'June Osborne','Sabrina Spellman','Buffy Summers','Eleven'),
                                                                    (6,'Lorelai Gilmore','Phoebe Buffay','Hannah Horvath','Carrie Bradshaw'),
                                                                    (7,'Clay Jensen', 'Archie Andrews', 'Barry Allen','Mc giver'),
                                                                    (8, 'Don Draper', 'Randall Pearson', 'Nate Fisher','Jack Pearson'),
                                                                    (9, 'Harvey Specter', 'Jimmy McGill', 'Harvey Bullock', 'Lucifer Morningstar'),
                                                                    (10, 'Ted Mosby', 'Leonard Hofstadter', 'Ross Geller', 'Chandler Bing'),
                                                                    (11, 'Walter White', 'Frank Delfino', 'Dexter Morgan', 'Dr House'),
                                                                    (12, 'Jack Pearson', 'Mike Ross', 'Donna Paulsen', 'Harvey Specter'),
                                                                    (13, 'Olivia Pope', 'Laurel Castillo', 'Michaela Pratt', 'Annalise Keating'),
                                                                    (14, 'Francis', 'Reese', 'Dewey', 'Malcolm'),
                                                                    (15, 'Nate Lahey', 'Junior Kyle', 'Gabriel Maddox', 'Micheal Kyle'),
                                                                    (16, 'Simon Basset', 'Daphne Bridgerton', 'Lady whistldown', 'Penelope Featherington'),
                                                                    (17, 'Tony Stark', 'Oliver Queen', 'Bruce Wayne', 'Barry Allen'),
                                                                    (18, 'Kara Danvers', 'Lex Luthor', 'Cat Grant', 'Supergirl'),
                                                                    (19, 'Blake Carrington', 'Cristal Carrington', 'Laura Van Kirk', 'Fallon Carrington'),
                                                                    (20, 'Morticia Addams', 'Gomez Addams', 'Pugsley Addams', 'Wednesday Addams');


INSERT INTO response (id_response, resp1, resp2, resp3, good_resp) VALUES
                                                                        (21, 'Tony Soprano', 'Jack Sparrow', 'James Bond','Harry Potter'),
                                                                        (22, 'Michael Scott', 'Barney Stinson', 'Leslie Knope', 'James Bond'),
                                                                        (23, 'Ellen Ripley', 'Sarah Connor', 'Trinity', 'Leeloo'),
                                                                        (24, 'Forrest Gump', 'Tony Stark', 'Maximus', 'Jack Sparrow'),
                                                                        (25, 'Tyler Durden', 'Hannibal Lecter', 'Anton Chigurh','The Jocker'),
                                                                        (26, 'Gollum', 'Dobby', 'Stitch','Yoda'),
                                                                        (27, 'James Bond', 'Jason Bourne', 'Ethan Hunt','Mr Fantastique'),
                                                                        (28, 'Leeloo', 'Alice', 'Sarah Connor','Wonda'),
                                                                        (29, 'John Rambo', 'Martin Riggs', 'John Wick','Rocky Balboa'),
                                                                        (30, 'Marty McFly', 'Doc Brown', 'Harry Potter','Luke Skywalker'),
                                                                        (31, 'Tony Montana', 'Michael Corleone', 'Spike Spiegel','Vito Corleone'),
                                                                        (32, 'Ethan Hunt', 'Jason Bourne', 'James Bond','Dominic Toretto'),
                                                                        (33, 'Tony Stark', 'Steve Rogers', 'Bruce Wayne','Peter Parker'),
                                                                        (34, 'Indiana Jones', 'Rick Deckard', 'Luke Skywalker','Quatre'),
                                                                        (35, 'Jack Sparrow', 'Captain Barbossa', 'Will Turner','Davy Jones'),
                                                                        (36, 'Ellen Ripley', 'Sarah Connor', 'Rey','Katniss Everdeen'),
                                                                        (37, 'Jack Pearson', 'Don Draper', 'Tony Soprano','Forest Gump'),
                                                                        (38, 'Tony Stark', 'Bruce Wayne', 'Steve Rogers','Clark Kent'),
                                                                        (39, 'Luke Skywalker', 'Harry Potter', 'Frodo Sacquet','Ethan Hunt'),
                                                                        (40, 'Peter Parker', 'Steve Rogers', 'Bruce Wayne','Tony Stark');



INSERT INTO response (id_response, resp1, resp2, resp3, good_resp) VALUES
                                                                       (41, 'Naruto Uzumaki', 'Monkey D. Luffy', 'Ichigo Kurosaki', 'Goku'),
                                                                       (42, 'Light Yagami', 'Edward Elric', 'Lelouch Lamperouge', 'Eren Yeager'),
                                                                       (43, 'Sailor Moon', 'Sakura Kinomoto', 'Nami', 'Monkey D. Luffy'),
                                                                       (44, 'Eren Yeager', 'Gon Freecss', 'Astaa', 'Tanjiro Kamado'),
                                                                       (45, 'Monkey D. Luffy', 'Yugi Muto', 'Gon Freecss', 'Natsu Dragneel'),
                                                                       (46, 'Naruto Uzumaki', 'Luffy', 'Goku', 'Ichigo Kurosaki'),
                                                                       (47, 'Pikachu', 'Agumon', 'Totoro', 'Naruto Uzumaki'),
                                                                       (48, 'Gon Freecss', 'Deku', 'Tanjiro Kamado', 'Saitama'),
                                                                       (49, 'L', 'Naruto Uzumaki', 'Gon Freecss', 'Light Yagami'),
                                                                       (50, 'Tony Marconi ', 'Inuyasha', 'Guts', 'Nicky Larson'),
                                                                       (51, 'Megumi Fushiguro', 'Satoru Gojo', 'Yuji Itadori', 'Ryomen Sukuna'),
                                                                       (52, 'Levi Ackerman', 'Roy Mustang', 'Shoto Todoroki', 'Killua Zoldyck'),
                                                                       (53, 'Asuna Yuuki', 'Mikasa Ackerman', 'Rin Tohsaka', 'Erza Scarlet'),
                                                                       (54, 'Saitama', 'Mob', 'Tanjiro Kamado', 'Izuku Midoriya'),
                                                                       (55, 'Usagi Tsukino', 'Sakura Kinomoto', 'Nami', 'Lucy Heartfilia'),
                                                                       (56, 'Roy Mustang', 'Roronoa Zoro', 'Toshiro Hitsugaya', 'Sasuke Uchiha'),
                                                                       (57, 'Ryuk', 'Mewtwo', 'Kyubey', 'Beerus'),
                                                                       (58, 'Rukia Kuchiki', 'Orihime Inoue', 'Hinata Hyuga', 'Bulma'),
                                                                       (59, 'Yoh Asakura', 'Yusei Fudo', 'Yusuke Urameshi', 'Yugi Muto'),
                                                                       (60, 'Kenshiro', 'Ryo Saeba', 'Goku', 'Inuyasha');
*/


INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES
                                                                 (1,1,1,'breaking_bad_img'),
                                                                 (2,1,2,'The_office_img'),
                                                                 (3,1,3,'Got_img'),
                                                                 (4,1,4,'The_Big_Bang_Theory_img'),
                                                                 (5,1,5,'Stranger_Things_img'),
                                                                 (6,1,6,'sex_and_the_city_img'),
                                                                 (7,1,7,'Mc_giver_img'),
                                                                 (8,1,8,'This_is_us_img'),
                                                                 (9,1,9,'Lucifer_img'),
                                                                 (10,1,10,'Friends_img'),
                                                                 (11,1,11,'Dr_House_img'),
                                                                 (12,1,12,'Suits_img'),
                                                                 (13,1,13,'Murder_img'),
                                                                 (14,1,14,'Malcom_img'),
                                                                 (15,1,15,'My_family_img'),
                                                                 (16,1,16,'Bridgerton_img'),
                                                                 (17,1,17,'Flash_img'),
                                                                 (18,1,18,'Supergirl_img'),
                                                                 (19,1,19,'Dynastie_img'),
                                                                 (20,1,20,'Wednesday_img');

INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES
                                                                 (21,2,21,'Harry_potter_img'),
                                                                 (22,2,22,'James_bond_img'),
                                                                 (23,2,23,'Leeloo_img'),
                                                                 (24,2,24,'Jack_sparow_img'),
                                                                 (25,2,25,'The_Jocker_img'),
                                                                 (26,2,26,'Yoda_img'),
                                                                 (27,2,27,'Mr_Fantastique_img'),
                                                                 (28,2,28,'Wonda_img'),
                                                                 (29,2,29,'Rocky_Balboa_img'),
                                                                 (30,2,30,'Luke_Skywalker_img'),
                                                                 (31,2,31,'Vito_Corleone_img'),
                                                                 (32,2,32,'Dominic_Toretto_img'),
                                                                 (33,2,33,'Peter_Parker_img'),
                                                                 (34,2,34,'Quatre_img'),
                                                                 (35,2,35,'Davy_Jones_img'),
                                                                 (36,2,36,'Katniss_Everdeen_img'),
                                                                 (37,2,37,'Forest_Gump_img'),
                                                                 (38,2,38,'Clark_Kent_img'),
                                                                 (39,2,39,'Ethan_Hunt_img'),
                                                                 (40,2,40,'Tony_Stark_img');

INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES
                                                                 (41,3,41,'Goku_img'),
                                                                 (42,3,42,'Eren_Yeager_img'),
                                                                 (43,3,43,'Luffy_img'),
                                                                 (44,3,44,'Tanjiro_img'),
                                                                 (45,3,45,'Natsu_img'),
                                                                 (46,3,46,'Ichigo_img'),
                                                                 (47,3,47,'Naruto_img'),
                                                                 (48,3,48,'Saitama_img'),
                                                                 (49,3,49,'Light_img'),
                                                                 (50,3,50,'Nicky_Larson_img'),
                                                                 (51,3,51,'Sukuna_img'),
                                                                 (52,3,52,'Killua_img'),
                                                                 (53,3,53,'Erza_img'),
                                                                 (54,3,54,'Izuku_img'),
                                                                 (55,3,55,'Lucy_img'),
                                                                 (56,3,56,'Sasuke_img'),
                                                                 (57,3,57,'Beerus_img'),
                                                                 (58,3,58,'Bulma_img'),
                                                                 (59,3,59,'Yugi_img'),
                                                                 (60,3,60,'Inuyasha_img');


/*INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (1,1,1,'breaking_bad_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (2,2,2,'The_office_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (3,3,3,'Got_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (4,4,4,'The_Big_Bang_Theory_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (5,5,5,'Stranger_Things_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (6,6,6,'sex_and_the_city_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (7,7,7,'Mc_giver_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (8,8,8,'This_is_us_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (9,9,9,'Lucifer_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (10,10,10,'Friends_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (11,11,11,'Dr_House_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (12,12,12,'Suits_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (13,13,13,'Murder_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (14,14,14,'Malcom_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (15,15,15,'My_family_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (16,16,16,'Bridgerton_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (17,17,17,'Flash_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (18,18,18,'Supergirl_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (19,19,19,'Dynastie_img');
INSERT INTO question (id_question, id_cat, id_res, name_img) VALUES (20,20,20,'Wednesday_img');*/

