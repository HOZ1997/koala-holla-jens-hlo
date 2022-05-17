CREATE TABLE koalas (
"id" serial PRIMARY KEY,
"name" varchar (15),
"age" varchar (3),
"gender" varchar (15),
"ready_to_transfer" varchar (10),
"notes" varchar (100)
);

SELECT * from koalas; 

INSERT INTO koalas (name, age, gender, ready_to_transfer,notes) VALUES ('Whippa', '3', 'F', 'N', 'testing koala insert');