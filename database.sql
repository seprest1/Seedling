-----------------------------USER TABLE-----------------------------


--DROP TABLE "user";
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "hardiness" VARCHAR (80),
    "zipcode" INT
);


INSERT INTO "user" ("username", "password")
	VALUES ('beet_root','pass123'), ('bees_knees', '123456'), ('green_thumb', 'fakepassword');

		
-----------------------------PLOT TABLE-----------------------------	


--DROP TABLE "plot";
CREATE TABLE "plot" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" ON DELETE CASCADE ON UPDATE CASCADE,
	"month" varchar (150) NOT NULL,
	"time created" DATE DEFAULT CURRENT_DATE,
	"time updated" DATE DEFAULT CURRENT_DATE
);


INSERT INTO "plot" ("user_id", "month")
	VALUES (1, 'October'), (2, 'November'), (3, 'December');


--------------------------VEGGIE TABLE-----------------------------


--DROP TABLE "plant";
CREATE TABLE "plant" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (150) NOT NULL,
	"scientific_name" VARCHAR (250),
	"description" VARCHAR (600),
	"sunlight" VARCHAR (150) NOT NULL,
	"sowing" VARCHAR (600),
	"row_spacing" INT,
	"color" VARCHAR (150)
);

INSERT INTO "plant" ("name", "sunlight")
	VALUES 
		('tomato', 'Full Sun'), 
		('eggplant', 'Full Shade'), 
		('cabbage', 'Full Shade'), 
		('squash', 'Partial Sun'), 
		('carrot', 'Full Sun'), 
		('cucumber', 'Full Shade'), 
		('pepper', 'Full Sun'), 
		('lettuce', 'Full Shade'), 
		('beans', 'Partial Sun'), 
		('kale', 'Full Sun'), 
		('cauliflower', 'Partial Sun');


------------------TABLE FOR EACH DIV EVER CREATED------------------


--DROP TABLE "div";
CREATE TABLE "div" (
	"id" SERIAL PRIMARY KEY,
	"plot_id" INT REFERENCES plot ON DELETE CASCADE ON UPDATE CASCADE,
	"plant_id" INT REFERENCES plant ON DELETE CASCADE ON UPDATE CASCADE,
	"location" INT, --refers to placement on a 4x6 grid
	"shade" VARCHAR (150) DEFAULT 'Full Sun', --refers to user-set shade
	"name" VARCHAR (150),
	"subvariety" VARCHAR (150) 
);

INSERT INTO "div" ("plot_id", "plant_id", "location")
	VALUES
		(1, 1, 1), (1, 1, 2), (1, 1, 3), (1, 1, 4), 		--row 1
		(1, 2, 5), (1, 2, 6), (1, 2, 7), (1, 2, 8), 		--row 2
		(1, 3, 9), (1, 3, 10), (1, 4, 11), (1, 4, 12), 		--row 3
		(1, 3, 13), (1, 3, 14), (1, 5, 15), (1, 5, 16), 	--row 4
		(1, 6, 17), (1, 6, 18), (1, 6, 19), (1, 6, 20), 	--row 5
		(1, 7, 21), (1, 7, 22), (1, 7, 23), (1, 7, 24);		--row 6


------------------------COMPANION TABLE-----------------------------


--DROP TABLE "companion";
CREATE TABLE "companion" (
	"id" SERIAL PRIMARY KEY,
	"plantID_1" INT REFERENCES plant ON DELETE CASCADE ON UPDATE CASCADE,
	"plantID_2" INT REFERENCES plant ON DELETE CASCADE ON UPDATE CASCADE,
	"relationship" VARCHAR (600)
);

INSERT INTO "companion" ("plantID_1", "plantID_2")
	VALUES (1, 11), (2, 6), (8, 9), (3, 7); 

