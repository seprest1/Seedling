--Create database named "seedling"

-----------------------------USER TABLE-----------------------------


DROP TABLE "user";
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "hardiness" VARCHAR (80),
    "zipcode" INT
);
		
-----------------------------PLOT TABLE-----------------------------	


DROP TABLE "plot";
CREATE TABLE "plot" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" ON DELETE CASCADE ON UPDATE CASCADE,
	"month" varchar (150) NOT NULL,
	"time created" DATE DEFAULT CURRENT_DATE,
	"time updated" DATE DEFAULT CURRENT_DATE
);

--------------------------VEGGIE TABLE-----------------------------


DROP TABLE "plant";
CREATE TABLE "plant" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (150) NOT NULL,
	"scientific_name" VARCHAR (250),
	"description" VARCHAR (1000),
	"sunlight" VARCHAR (150) NOT NULL,
	"sowing" VARCHAR (600),
	"row_spacing" VARCHAR(150),
	"color" VARCHAR (150),
	"image" VARCHAR (600)
);

INSERT INTO "plant" ("name", "scientific_name", "description", "sunlight", "sowing", "row_spacing", "color", "image")
	VALUES 
	
('Tomato', 'Solanum Lycopersicum', 'The tomato is the fruit of the tomato plant, a member of the Nightshade family (Solanaceae). The fruit grows on a small compact bush.','Full Sun', 'Direct seed indoors, transplant seedlings outside after hardening off.', '45 centimeters', 'red', 'https://img.freepik.com/premium-vector/bright-red-tomatoes-ingredients-healthy-cooking_68708-2007.jpg?w=2000'), 

('Eggplant', 'Solanum Melongena', 'Eggplants commonly are egg-shaped with glossy black skin, but can come in a variety of other shapes and colors. They can be white, yellow, and pale to deep purple. Some are as small as goose eggs. The "Rosa Bianca" cultivar is squat and round, while Asian cultivars can be long and thin. Eggplant stems are often spiny and their flowers range from white to purple. Their flesh is generally white with a meaty texture and small seeds in the center. They are delicious grilled, roasted, in soups and stews, and breaded and fried.', 'Full Sun', 'Sow seeds indoors and transplant out, or plant nursery seedlings', '60 centimeters', 'purple', 'https://static.vecteezy.com/system/resources/thumbnails/003/170/065/small_2x/eggplant-isolated-on-a-white-background-in-a-flat-style-free-vector.jpg'), 

('Cabbage', 'Brassica oleracea', 'Cabbage is a member of the Brassica family and related to kale, broccoli, brussels sprouts, and cauliflower. It''s dense, layered heads grow on stalks and are surrounded by looser outer leaves. It''s leaves can be green, white, or purple in color, and smooth or crinkly in texture. Depending on the variety, the head can be round, oblong, or flat. Cabbage prefers cooler temperatures and is best planted in the spring or fall.', 'Full Sun', 'Direct seed indoors, transplant seedlings outside after hardening off.', '60 centimeters', 'light_green', 'https://static.vecteezy.com/system/resources/previews/006/562/329/non_2x/cabbage-illustration-in-cartoon-style-vector.jpg'), 

('Squash', 'Cucurbita', 'Squash is a genus of herbaceous vines that have large edible orange flowers that mature into gourds or cucurbits. Squash are commonly divided into two main groups: summer and winter. Summer squash have shorter growing times, a bushy growth habit, tender skin, and are quite prolific. Common types include cucumbers, zucchini, and pattypan squash. Winter squash take longer to mature, have a more sprawling growth habit, and produce gourds with thicker skins that can be stored for a few months. Common winter squash are pumpkins, butternut squash, acorn, and delicata. Most squash transplant poorly. If starting from seed indoors, use peat pots that can be directly transplanted into the soil to reduce root disturbance. More growing information is available in individual species entries.', 'Full Sun', 'Direct seed indoors or outdoors.', '45 centimeters', 'orange', 'https://static.vecteezy.com/system/resources/thumbnails/010/592/309/small_2x/illustration-of-an-orange-pumpkin-autumn-pumpkin-for-halloween-vegetable-graphic-icon-or-print-highlighted-on-a-white-background-vector.jpg'),
 
('Carrot', 'Daucus Carota', 'The carrot is a root vegetable. It is usually orange in color, but some cultivars are purple, black, red, white, and yellow. The most commonly eaten part of the plant is the taproot, but the greens are sometimes eaten as well. The leaves appear first, and the taproot grows more slowly beneath the soil. Fast-growing cultivars mature within three months of sowing the seed. Slower-maturing cultivars are harvested four months after sowing.', 'Full Sun', 'Direct Seed, thin to 3cm apart when seedlings are 8cm high.', '5 centimeters', 'orange', 'https://img.freepik.com/free-vector/healthy-orange-carrots-graphic-illustration_53876-8469.jpg?w=2000'), 

('Cucumber', 'Cucumis Sativus', 'Cucumbers are the fruit of a creeping vine. They are generally oblong and have a high water content. Their edible skin is often green but can also be yellow, white, or striped. The vine can be left to spread along the ground, or it can be trained to a trellis. The vine''s large leaves hide the cucumbers and shade them. There are three main varieties of cucumber: slicing, pickling, and seedless.', 'Full Sun', 'Direct seed outdoors in groups of 2-3, 1/2" deep. Thin to 1 plant.', '120 centimeters', 'light_green', 'https://static7.depositphotos.com/1096434/914/v/600/depositphotos_9144196-stock-illustration-cucumber-green-ripe.jpg'), 

('Beet', 'Beta Vulgaris', 'Typically grown for its round or cylindrical taproot, the leaves of the beet are also edible. Leaves resemble Swiss chard on a smaller scale and are good sautéed. The taproot, or beet, ranges in color from deep red to gold, orange, or white and red striped. The beet has a delicious, earthy flavor with a touch of sweetness to it when roasted.', 'Full Shade', 'Direct seed into soil. Thin to 7cm apart when seedlings are 5cm tall.', '10 centimeters', 'red', 'https://t4.ftcdn.net/jpg/02/88/28/27/360_F_288282747_7L2AQp1ORQSxhU42f5Xj43Y5WGq5F5fD.jpg'),

('Pepper', 'Capsicum', 'The chilli pepper (from Nahuatl chīlli) is the fruit of plants from the genus Capsicum which are members of the nightshade family, Solanaceae. Chilli peppers are widely used in many cuisines as a spice to add heat to dishes. The substances that give chilli peppers their intensity when ingested or applied topically are capsaicin and related compounds known as capsaicinoids. Chilli peppers originated in Mexico. After the Columbian Exchange, many cultivars of chilli pepper spread across the world, used for both food and traditional medicine.', 'Full Sun', 'Direct seed indoors, transplant seedlings outside after hardening off.', '60 centimeters', 'red', 'https://media.istockphoto.com/vectors/chili-pepper-vector-vector-id857599798?k=20&m=857599798&s=612x612&w=0&h=yvby9PTpZj_RU-sEMk-Uf6pFtfYIY6OUjYULWjLAr4U='), 

('Lettuce', 'Lactuca Sativa', 'Lettuce is a cool weather crop and high temperatures will impede germination and/or cause the plant to bolt (go to seed quickly). Some hybrid cultivars have been bred to be more heat-resistant.', 'Partial Sun', 'Direct seed outdoors, thin to 20cm when seedlings are 3cm tall.', '40 centimeters', 'light_green', 'https://media.istockphoto.com/vectors/isolatedvector-vector-id648492672?b=1&k=20&m=648492672&s=612x612&w=0&h=tw5CV3EBd_pUOMlf6mrZtKyKBW2QTXoW7KzfYs5GI8U='), 

('Beans', 'Phaseolus Vulgaris', 'Green beans are the unripe, young fruit and protective pods of various cultivars of the common bean (Phaseolus vulgaris). Immature or young pods of the runner bean (Phaseolus coccineus), yardlong bean (Vigna unguiculata subsp. sesquipedalis), and hyacinth bean (Lablab purpureus) are used in a similar way.', 'Partial Sun', 'Direct seed outdoors, 8cm apart. Thin seedlings to 30cm.
', '80 centimeters', 'dark_green', 'https://us.123rf.com/450wm/iamnee/iamnee1404/iamnee140400098/27458384-vegetable-an-illustration-of-fresh-green-beans-or-phaseolus-vulgaris-with-green-leaves-on-a-vine-.jpg?ver=6'), 

('Kale', 'Brassica Oleracea (Acephala)', 'Kale is a cultivar of the species Brassica oleracea. It has green or purple leaves that branch off from one to multiple upright stems and do not form a head like cabbage. The plant is usually grown as an annual, but if grown as a perennial, it will form seeds in the second year. Current popular varieties include Curly kale, Italian kale, and Red Russian kale (green leaves with pale purple stems). It can be grown as baby salad greens or for bunching adult leaves. Leaves are sweeter after a frost and delicious eaten raw, added to salads, sautéed, or added to stews and casseroles.', 'Full Sun', 'Direct seed. If planting indoors, harden off before transplanting seedlings outside.', '45 centimeters', 'dark_green', 'https://us.123rf.com/450wm/phoebeyu/phoebeyu1808/phoebeyu180800488/112042156-nature-organic-vegetable-kale-healthy-vector-colorful-food-vegetable-spice-ingredient-.jpg?ver=6'), 

('Cauliflower', 'Brassica Oleracea', 'Cauliflower is a vegetable in the Brassicaceae family. The solid, firm head resembles that of broccoli and is usually white, but can also be yellow, purple, or green in color. Like broccoli, it sits atop a stalk. The head is wrapped in thick leaves that begin to open when the plant is ready for harvest. All cauliflower does best in cool weather.', 'Partial Sun', 'Sow seeds indoors, harden seedlings off before transplanting
', '60 centimeters', 'white', 'https://us.123rf.com/450wm/jemastock/jemastock1904/jemastock190413495/123847872-cauliflower-icon-cartoon-isolated-vector-illustration-graphic-design.jpg?ver=6');

------------------TABLE FOR EACH DIV EVER CREATED------------------


DROP TABLE "div";
CREATE TABLE "div" (
	"id" SERIAL PRIMARY KEY,
	"plot_id" INT REFERENCES plot ON DELETE CASCADE ON UPDATE CASCADE,
	"plant_id" INT REFERENCES plant ON DELETE CASCADE ON UPDATE CASCADE,
	"location" INT, --refers to placement on a 4x6 grid
	"shade" VARCHAR (150) DEFAULT 'Full Sun', --refers to user-set shade
	"name" VARCHAR (150),
	"subvariety" VARCHAR (150),
	"color" VARCHAR (150)
);

------------------------COMPANION TABLE-----------------------------

DROP TABLE "companion";
CREATE TABLE "companion" (
	"id" SERIAL PRIMARY KEY,
	"plantID_1" INT REFERENCES plant ON DELETE CASCADE ON UPDATE CASCADE,
	"plantID_2" INT REFERENCES plant ON DELETE CASCADE ON UPDATE CASCADE,
	"relationship" VARCHAR (600)
);

INSERT INTO "companion" ("plantID_1", "plantID_2")
	VALUES (1, 11), (2, 6), (8, 9), (3, 7); 
	
------------------------GROWING SEASON-----------------------------

DROP TABLE "growing_season";
CREATE TABLE "growing_season" (
	"id" SERIAL PRIMARY KEY,
	"plant_id" INT REFERENCES plant ON DELETE CASCADE ON UPDATE CASCADE,
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
	



	
	
	
	






	