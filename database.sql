--Create database named "seedling"

-----------------------------USER TABLE-----------------------------


--DROP TABLE "user";
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "hardiness" VARCHAR (80),
    "zipcode" INT
);
		
-----------------------------PLOT TABLE-----------------------------	


--DROP TABLE "plot";
CREATE TABLE "plot" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" ON DELETE CASCADE ON UPDATE CASCADE,
	"month" INT,
	"year" INT, 
	"notes" VARCHAR (1000),
	"time created" DATE DEFAULT CURRENT_DATE,
	"time updated" DATE DEFAULT CURRENT_DATE
);

--------------------------VEGGIE TABLE-----------------------------


--DROP TABLE "plant";
CREATE TABLE "plant" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (150) NOT NULL,
	"scientific_name" VARCHAR (250),
	"description" VARCHAR (1000),
	"shade" VARCHAR (150) NOT NULL,
	"sowing" VARCHAR (600),
	"row_spacing" VARCHAR(150),
	"color" VARCHAR (150),
	"image" VARCHAR (600),
	"icon" VARCHAR (500)
);

INSERT INTO "plant" ("name", "scientific_name", "description", "shade", "sowing", "row_spacing", "color", "image", "icon")
	VALUES 
	
('Tomato', 'Solanum Lycopersicum', 'The tomato is the fruit of the tomato plant, a member of the Nightshade family (Solanaceae). The fruit grows on a small compact bush.','Full Sun', 'Direct seed indoors, transplant seedlings outside after hardening off.', '45 centimeters', 'red', 'https://images.pexels.com/photos/5503107/pexels-photo-5503107.jpeg?auto=compress&cs=tinysrgb&w=800', 'Images/Plant_Icons/tomato.png'), 

('Eggplant', 'Solanum Melongena', 'Eggplants commonly are egg-shaped with glossy black skin, but can come in a variety of other shapes and colors. They can be white, yellow, and pale to deep purple. Some are as small as goose eggs. The "Rosa Bianca" cultivar is squat and round, while Asian cultivars can be long and thin. Eggplant stems are often spiny and their flowers range from white to purple. Their flesh is generally white with a meaty texture and small seeds in the center. They are delicious grilled, roasted, in soups and stews, and breaded and fried.', 'Full Sun', 'Sow seeds indoors and transplant out, or plant nursery seedlings', '60 centimeters', 'purple', 'https://images.pexels.com/photos/5529596/pexels-photo-5529596.jpeg?auto=compress&cs=tinysrgb&w=800', 'Images/Plant_Icons/eggplant.png'), 

('Cabbage', 'Brassica oleracea', 'Cabbage is a member of the Brassica family and related to kale, broccoli, brussels sprouts, and cauliflower. It''s dense, layered heads grow on stalks and are surrounded by looser outer leaves. It''s leaves can be green, white, or purple in color, and smooth or crinkly in texture. Depending on the variety, the head can be round, oblong, or flat. Cabbage prefers cooler temperatures and is best planted in the spring or fall.', 'Full Sun', 'Direct seed indoors, transplant seedlings outside after hardening off.', '60 centimeters', 'light_green', 'https://images.pexels.com/photos/4947354/pexels-photo-4947354.jpeg?auto=compress&cs=tinysrgb&w=800', 'Images/Plant_Icons/cabbage.png'), 

('Squash', 'Cucurbita', 'Squash is a genus of herbaceous vines that have large edible orange flowers that mature into gourds or cucurbits. Squash are commonly divided into two main groups: summer and winter. Summer squash have shorter growing times, a bushy growth habit, tender skin, and are quite prolific. Common types include cucumbers, zucchini, and pattypan squash. Winter squash take longer to mature, have a more sprawling growth habit, and produce gourds with thicker skins that can be stored for a few months. Common winter squash are pumpkins, butternut squash, acorn, and delicata. Most squash transplant poorly. If starting from seed indoors, use peat pots that can be directly transplanted into the soil to reduce root disturbance. More growing information is available in individual species entries.', 'Full Sun', 'Direct seed indoors or outdoors.', '45 centimeters', 'orange', 'https://images.pexels.com/photos/5528950/pexels-photo-5528950.jpeg?auto=compress&cs=tinysrgb&w=800', 'Images/Plant_Icons/pumpkin.png'),
 
('Carrot', 'Daucus Carota', 'The carrot is a root vegetable. It is usually orange in color, but some cultivars are purple, black, red, white, and yellow. The most commonly eaten part of the plant is the taproot, but the greens are sometimes eaten as well. The leaves appear first, and the taproot grows more slowly beneath the soil. Fast-growing cultivars mature within three months of sowing the seed. Slower-maturing cultivars are harvested four months after sowing.', 'Full Sun', 'Direct Seed, thin to 3cm apart when seedlings are 8cm high.', '5 centimeters', 'orange', 'https://images.pexels.com/photos/6631952/pexels-photo-6631952.jpeg?auto=compress&cs=tinysrgb&w=800', 'Images/Plant_Icons/carrot.png'), 

('Cucumber', 'Cucumis Sativus', 'Cucumbers are the fruit of a creeping vine. They are generally oblong and have a high water content. Their edible skin is often green but can also be yellow, white, or striped. The vine can be left to spread along the ground, or it can be trained to a trellis. The vine''s large leaves hide the cucumbers and shade them. There are three main varieties of cucumber: slicing, pickling, and seedless.', 'Full Sun', 'Direct seed outdoors in groups of 2-3, 1/2" deep. Thin to 1 plant.', '120 centimeters', 'light_green', 'https://images.pexels.com/photos/9020085/pexels-photo-9020085.jpeg?auto=compress&cs=tinysrgb&w=800', 'Images/Plant_Icons/cucumber.png'), 

('Beet', 'Beta Vulgaris', 'Typically grown for its round or cylindrical taproot, the leaves of the beet are also edible. Leaves resemble Swiss chard on a smaller scale and are good sautéed. The taproot, or beet, ranges in color from deep red to gold, orange, or white and red striped. The beet has a delicious, earthy flavor with a touch of sweetness to it when roasted.', 'Full Shade', 'Direct seed into soil. Thin to 7cm apart when seedlings are 5cm tall.', '10 centimeters', 'red', 'https://images.pexels.com/photos/5012852/pexels-photo-5012852.jpeg?auto=compress&cs=tinysrgb&w=800', 'Images/Plant_Icons/beet.png'),

('Pepper', 'Capsicum', 'The chilli pepper (from Nahuatl chīlli) is the fruit of plants from the genus Capsicum which are members of the nightshade family, Solanaceae. Chilli peppers are widely used in many cuisines as a spice to add heat to dishes. The substances that give chilli peppers their intensity when ingested or applied topically are capsaicin and related compounds known as capsaicinoids. Chilli peppers originated in Mexico. After the Columbian Exchange, many cultivars of chilli pepper spread across the world, used for both food and traditional medicine.', 'Full Sun', 'Direct seed indoors, transplant seedlings outside after hardening off.', '60 centimeters', 'red', 'https://images.pexels.com/photos/10607850/pexels-photo-10607850.jpeg?auto=compress&cs=tinysrgb&w=800', 'Images/Plant_Icons/chili.png'), 

('Lettuce', 'Lactuca Sativa', 'Lettuce is a cool weather crop and high temperatures will impede germination and/or cause the plant to bolt (go to seed quickly). Some hybrid cultivars have been bred to be more heat-resistant.', 'Partial Sun', 'Direct seed outdoors, thin to 20cm when seedlings are 3cm tall.', '40 centimeters', 'light_green', 'https://images.pexels.com/photos/116728/pexels-photo-116728.jpeg?auto=compress&cs=tinysrgb&w=800', 'Images/Plant_Icons/lettuce.png'), 

('Beans', 'Phaseolus Vulgaris', 'Green beans are the unripe, young fruit and protective pods of various cultivars of the common bean (Phaseolus vulgaris). Immature or young pods of the runner bean (Phaseolus coccineus), yardlong bean (Vigna unguiculata subsp. sesquipedalis), and hyacinth bean (Lablab purpureus) are used in a similar way.', 'Partial Sun', 'Direct seed outdoors, 8cm apart. Thin seedlings to 30cm.
', '80 centimeters', 'dark_green', 'https://upload.wikimedia.org/wikipedia/commons/a/a0/French_beans_J1.JPG', 'Images/Plant_Icons/beans.png'), 

('Kale', 'Brassica Oleracea (Acephala)', 'Kale is a cultivar of the species Brassica oleracea. It has green or purple leaves that branch off from one to multiple upright stems and do not form a head like cabbage. The plant is usually grown as an annual, but if grown as a perennial, it will form seeds in the second year. Current popular varieties include Curly kale, Italian kale, and Red Russian kale (green leaves with pale purple stems). It can be grown as baby salad greens or for bunching adult leaves. Leaves are sweeter after a frost and delicious eaten raw, added to salads, sautéed, or added to stews and casseroles.', 'Full Sun', 'Direct seed. If planting indoors, harden off before transplanting seedlings outside.', '45 centimeters', 'dark_green', 'https://images.pexels.com/photos/9465758/pexels-photo-9465758.jpeg?auto=compress&cs=tinysrgb&w=800', 'Images/Plant_Icons/kale.png'), 

('Cauliflower', 'Brassica Oleracea', 'Cauliflower is a vegetable in the Brassicaceae family. The solid, firm head resembles that of broccoli and is usually white, but can also be yellow, purple, or green in color. Like broccoli, it sits atop a stalk. The head is wrapped in thick leaves that begin to open when the plant is ready for harvest. All cauliflower does best in cool weather.', 'Partial Sun', 'Sow seeds indoors, harden seedlings off before transplanting
', '60 centimeters', 'white', 'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=800', 'Images/Plant_Icons/cauliflower.png');

------------------TABLE FOR EACH DIV EVER CREATED------------------


--DROP TABLE "div";
CREATE TABLE "div" (
	"id" SERIAL PRIMARY KEY,
	"plot_id" INT REFERENCES plot ON DELETE CASCADE ON UPDATE CASCADE,
	"plant_id" INT REFERENCES plant,
	"location" INT, --refers to placement on a 4x6 grid
	"shade" VARCHAR (150) DEFAULT 'Full Sun', --refers to user-set shade
	"name" VARCHAR (150),
	"subvariety" VARCHAR (150),
	"color" VARCHAR (150),
	"icon" VARCHAR (150)
);

------------------------COMPANION TABLE-----------------------------

--DROP TABLE "companion";
CREATE TABLE "companion" (
	"id" SERIAL PRIMARY KEY,
	"plantID_1" INT REFERENCES plant,
	"plantID_2" INT REFERENCES plant,
	"relationship" VARCHAR (600)
);

INSERT INTO "companion" ("plantID_1", "plantID_2")
	VALUES (1, 11), (2, 6), (8, 9), (3, 7); 
	
------------------------GROWING SEASON-----------------------------

--DROP TABLE "growing_season";
CREATE TABLE "growing_season" (
	"id" SERIAL PRIMARY KEY,
	"plant_id" INT REFERENCES plant,
	"user_hardiness" VARCHAR (80),
	"march" INT,
	"april" INT,
	"may" INT,
	"june" INT,
	"july" INT,
	"august" INT,
	"september" INT,
	"october" INT
);

INSERT INTO "growing_season" ( "plant_id", "march", "april", "may", "june", "july", "august", "september", "october")
	VALUES 
	(1, 50, 60, 70, 90, 80, 70, 60, 0), --TOMATO
	(2, 0, 0, 0, 50, 70, 90, 100, 80), --EGGPLANT
	(3, 0, 50, 70, 100, 60, 0, 0, 0), --CABBAGE
	(4, 0, 0, 60, 80, 90, 100, 90, 80), --SQUASH
	(5, 70, 90, 70, 50, 0, 70, 90, 70), --CARROT
	(6, 0, 0, 60, 80, 100, 70, 0, 0), --CUCUMBER
	(7, 70, 90, 70, 0, 0, 70, 90, 70), --BEET
	(8, 50, 60, 70, 90, 80, 70, 60, 0), --PEPPER
	(9, 70, 90, 70, 0, 0, 70, 90, 70), --LETTUCE
	(10, 0, 50, 70, 90, 100, 100, 90, 80), --BEANS
	(11, 70, 90, 70, 0, 0, 70, 90, 70), --KALE
	(12, 70, 90, 70, 0, 0, 70, 90, 70); --CAULIFLOWER
			
--DROP TABLE "tasks";
CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" ON DELETE CASCADE ON UPDATE CASCADE,
	"task" VARCHAR (500),
	"completed" BOOLEAN DEFAULT false
);


        

