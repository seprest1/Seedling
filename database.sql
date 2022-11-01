-----------------------------USER TABLE-----------------------------


--DROP TABLE "user";
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (300) NOT NULL,
    "hardiness" VARCHAR (80),
    "zipcode" INT,
    "city" VARCHAR (300),
    "weather_key" VARCHAR (200)
);
		
-----------------------------PLOT TABLE-----------------------------	


--DROP TABLE "plot";
CREATE TABLE "plot" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" (id) ON DELETE CASCADE,
	"month" INT,
	"year" INT, 
	"notes" VARCHAR (1000),
	"time created" DATE DEFAULT CURRENT_DATE,
	"time updated" DATE DEFAULT CURRENT_DATE
);

------------------------GROWING SEASON-----------------------------


--DROP TABLE "growing_season";
CREATE TABLE "growing_season" (
	"id" SERIAL PRIMARY KEY,
	"hardiness" VARCHAR (80),
	"march" INT,
	"april" INT,
	"may" INT,
	"june" INT,
	"july" INT,
	"august" INT,
	"september" INT,
	"october" INT
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
	"icon" VARCHAR (500),
	"growing" INT REFERENCES "growing_season" (id)
);

------------------TABLE FOR EACH DIV EVER CREATED------------------


--DROP TABLE "div";
CREATE TABLE "div" (
	"id" SERIAL PRIMARY KEY,
	"plot_id" INT REFERENCES plot(id) ON DELETE CASCADE,
	"plant_id" INT REFERENCES plant(id),
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
	"main_plant" INT REFERENCES plant(id),
	"helper_plant" VARCHAR (200),
	"relationship" VARCHAR (600)
);
	

------------------------------TASKS---------------------------------
			
			
--DROP TABLE "tasks";
CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user"(id) ON DELETE CASCADE,
	"task" VARCHAR (500),
	"completed" BOOLEAN DEFAULT false
);


------------------------------TIPS----------------------------------


--DROP TABLE "tips";
CREATE TABLE "tips" (
	"id" SERIAL PRIMARY KEY,
	"tip" VARCHAR (1000)
);


---------------------------DUMMY DATA-------------------------------

INSERT INTO "growing_season" ("march", "april", "may", "june", "july", "august", "september", "october")
	VALUES 
	
	(0, 0, 0, 50, 70, 90, 100, 80), -- 1: EGGPLANT
	(0, 0, 60, 80, 90, 100, 90, 80), -- 2: SQUASH
	(0, 0, 60, 80, 100, 70, 0, 0), -- 3: CUCUMBER
	(0, 50, 70, 100, 60, 0, 0, 0), -- 4: CABBAGE
	(0, 50, 70, 90, 80, 60, 0, 0), -- 5: ARTICHOKE,
	(0, 50, 70, 90, 100, 100, 90, 80), -- 6: BEANS
	(50, 60, 70, 90, 80, 70, 60, 0), -- 7: TOMATO, PEPPER
	(70, 90, 70, 0, 0, 70, 90, 70), -- 8: BEET, LETTUCE, KALE, CAULIFLOWER, CARROT
	(70, 90, 70, 0, 0, 0, 0, 0); --9: APARAGAUS, 

---currently hard-coded, but could be tied to specific hardiness zone---

----------------------------------------------------------------------

INSERT INTO "plant" ("name", "scientific_name", "description", "shade", "sowing", "row_spacing", "color", "image", "icon", "growing")
	VALUES 
	
('Tomato', 
'Solanum Lycopersicum', 
'The tomato is the fruit of the tomato plant, a member of the Nightshade family (Solanaceae). The fruit grows on a small compact bush.',
'Full Sun', 'Direct seed indoors, transplant seedlings outside after hardening off.', 
'45 centimeters', 
'red1', 
'https://images.pexels.com/photos/5503107/pexels-photo-5503107.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/tomato.png', 
6), 

('Eggplant', 
'Solanum Melongena', 
'Eggplants commonly are egg-shaped with glossy black skin, but can come in a variety of other shapes and colors. They can be white, yellow, and pale to deep purple. Some are as small as goose eggs. The "Rosa Bianca" cultivar is squat and round, while Asian cultivars can be long and thin. Eggplant stems are often spiny and their flowers range from white to purple. Their flesh is generally white with a meaty texture and small seeds in the center. They are delicious grilled, roasted, in soups and stews, and breaded and fried.', 
'Full Sun', 
'Sow seeds indoors and transplant out, or plant nursery seedlings', 
'60 centimeters', 
'purple', 
'https://images.pexels.com/photos/5529596/pexels-photo-5529596.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/eggplant.png', 
1), 

('Cabbage', 
'Brassica oleracea', 
'Cabbage is a member of the Brassica family and related to kale, broccoli, brussels sprouts, and cauliflower. It''s dense, layered heads grow on stalks and are surrounded by looser outer leaves. It''s leaves can be green, white, or purple in color, and smooth or crinkly in texture. Depending on the variety, the head can be round, oblong, or flat. Cabbage prefers cooler temperatures and is best planted in the spring or fall.', 
'Full Sun', 
'Direct seed indoors, transplant seedlings outside after hardening off.', 
'60 centimeters', 
'green1', 
'https://images.pexels.com/photos/4947354/pexels-photo-4947354.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/cabbage.png', 
4), 

('Squash', 
'Cucurbita', 
'Squash is a genus of herbaceous vines that have large edible orange flowers that mature into gourds or cucurbits. Squash are commonly divided into two main groups: summer and winter. Summer squash have shorter growing times, a bushy growth habit, tender skin, and are quite prolific. Common types include cucumbers, zucchini, and pattypan squash. Winter squash take longer to mature, have a more sprawling growth habit, and produce gourds with thicker skins that can be stored for a few months. Common winter squash are pumpkins, butternut squash, acorn, and delicata. Most squash transplant poorly. If starting from seed indoors, use peat pots that can be directly transplanted into the soil to reduce root disturbance. More growing information is available in individual species entries.', 
'Full Sun', 
'Direct seed indoors or outdoors.', 
'45 centimeters', 
'orange2', 
'https://images.pexels.com/photos/5528950/pexels-photo-5528950.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/pumpkin.png', 
2),
 
('Carrot', 
'Daucus Carota', 
'The carrot is a root vegetable. It is usually orange in color, but some cultivars are purple, black, red, white, and yellow. The most commonly eaten part of the plant is the taproot, but the greens are sometimes eaten as well. The leaves appear first, and the taproot grows more slowly beneath the soil. Fast-growing cultivars mature within three months of sowing the seed. Slower-maturing cultivars are harvested four months after sowing.', 
'Full Sun', 
'Direct Seed, thin to 3cm apart when seedlings are 8cm high.', 
'5 centimeters', 
'orange1', 
'https://images.pexels.com/photos/6631952/pexels-photo-6631952.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/carrot.png', 
7), 

('Cucumber', 
'Cucumis Sativus', 
'Cucumbers are the fruit of a creeping vine. They are generally oblong and have a high water content. Their edible skin is often green but can also be yellow, white, or striped. The vine can be left to spread along the ground, or it can be trained to a trellis. The vine''s large leaves hide the cucumbers and shade them. There are three main varieties of cucumber: slicing, pickling, and seedless.', 
'Full Sun', 
'Direct seed outdoors in groups of 2-3, 1/2" deep. Thin to 1 plant.', 
'120 centimeters', 
'green2', 
'https://images.pexels.com/photos/9020085/pexels-photo-9020085.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/cucumber.png', 
3), 

('Beet', 
'Beta Vulgaris', 
'Typically grown for its round or cylindrical taproot, the leaves of the beet are also edible. Leaves resemble Swiss chard on a smaller scale and are good sautéed. The taproot, or beet, ranges in color from deep red to gold, orange, or white and red striped. The beet has a delicious, earthy flavor with a touch of sweetness to it when roasted.', 
'Full Shade', 
'Direct seed into soil. Thin to 7cm apart when seedlings are 5cm tall.', 
'10 centimeters', 
'red2', 
'https://images.pexels.com/photos/5012852/pexels-photo-5012852.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/beet.png', 
7),

('Pepper', 
'Capsicum', 
'The chilli pepper (from Nahuatl chīlli) is the fruit of plants from the genus Capsicum which are members of the nightshade family, Solanaceae. Chilli peppers are widely used in many cuisines as a spice to add heat to dishes. The substances that give chilli peppers their intensity when ingested or applied topically are capsaicin and related compounds known as capsaicinoids. Chilli peppers originated in Mexico. After the Columbian Exchange, many cultivars of chilli pepper spread across the world, used for both food and traditional medicine.', 
'Full Sun', 
'Direct seed indoors, transplant seedlings outside after hardening off.', 
'60 centimeters', 
'red1', 
'https://images.pexels.com/photos/10607850/pexels-photo-10607850.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/chili.png', 
6), 

('Lettuce', 
'Lactuca Sativa', 
'Lettuce is a cool weather crop and high temperatures will impede germination and/or cause the plant to bolt (go to seed quickly). Some hybrid cultivars have been bred to be more heat-resistant.', 
'Partial Sun', 
'Direct seed outdoors, thin to 20cm when seedlings are 3cm tall.', 
'40 centimeters', 
'green5', 
'https://images.pexels.com/photos/116728/pexels-photo-116728.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/lettuce.png', 
7), 

('Green Beans', 
'Phaseolus Vulgaris', 
'Green beans are the unripe, young fruit and protective pods of various cultivars of the common bean (Phaseolus vulgaris). Immature or young pods of the runner bean (Phaseolus coccineus), yardlong bean (Vigna unguiculata subsp. sesquipedalis), and hyacinth bean (Lablab purpureus) are used in a similar way.', 
'Partial Sun', 
'Direct seed outdoors, 8cm apart. Thin seedlings to 30cm.', 
'80 centimeters', 
'green3', 
'https://upload.wikimedia.org/wikipedia/commons/a/a0/French_beans_J1.JPG', 
'Images/Plant_Icons/beans.png', 
5), 

('Kale', 
'Brassica Oleracea (Acephala)', 
'Kale is a cultivar of the species Brassica oleracea. It has green or purple leaves that branch off from one to multiple upright stems and do not form a head like cabbage. The plant is usually grown as an annual, but if grown as a perennial, it will form seeds in the second year. Current popular varieties include Curly kale, Italian kale, and Red Russian kale (green leaves with pale purple stems). It can be grown as baby salad greens or for bunching adult leaves. Leaves are sweeter after a frost and delicious eaten raw, added to salads, sautéed, or added to stews and casseroles.', 
'Full Sun', 
'Direct seed. If planting indoors, harden off before transplanting seedlings outside.', 
'45 centimeters', 
'green4', 
'https://images.pexels.com/photos/9465758/pexels-photo-9465758.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/kale.png', 
7), 

('Cauliflower', 
'Brassica Oleracea', 
'Cauliflower is a vegetable in the Brassicaceae family. The solid, firm head resembles that of broccoli and is usually white, but can also be yellow, purple, or green in color. Like broccoli, it sits atop a stalk. The head is wrapped in thick leaves that begin to open when the plant is ready for harvest. All cauliflower does best in cool weather.', 
'Partial Sun', 
'Sow seeds indoors, harden seedlings off before transplanting', 
'60 centimeters', 
'white', 
'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/cauliflower.png', 
7),

('Artichoke', 
'Asparagus Officinalis', 
'The globe artichoke is a variety of a species of thistle cultivated as a food. The budding artichoke flower-head is the edible part of the plant. It is a cluster of many budding small flowers (known as an "inflorescence") and bracts on an edible base. Once the buds bloom the head becomes coarse and barely edible. Artichokes are perennials in Zone 7 and warmer. They normally produce edible flower-heads during their second year, but recent cultivars such as "Imperial Star" have been bred to produce in the first year. Other cultivars, such as "Northern Star", have been bred to overwinter in more northern climates. There are green and purple varieties of artichoke. They are often steamed, sautéed or braised, but can also be eaten raw.', 
'Partial Sun', 
'Direct seed indoors. In warmer zones, propagate "pups."',
'90 centimeters', 
'green2', 
'https://images.pexels.com/photos/3912846/pexels-photo-3912846.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/artichoke.png', 
7),

('Asparagus', 
'Cynara Cardunculus', 
'Perennial spring vegetable often sown from crowns. The vegetable has a mild flavor with earthy undertones. When mature and reproducing, the plant creates tall, stout stems with feathery foliage and small red berries.', 
'Partial Sun', 
'Transplant crowns outside, or start seeds indoors',
'30 centimeters', 
'green1', 
'https://images.pexels.com/photos/2069280/pexels-photo-2069280.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/asparagus.png', 
8),

('Butter Bean', 
'Phaseolus Coccineus', 
'The Runner, or Multiflora, Bean is a vining plant in the Fabaceae (legume) family that is native to Central America. It is sometimes called the Butter Bean, which can also refer to the Lima Bean, a separate species. The Runner Bean differs from other beans in that it can be grown as a perennial where the ground does not freeze. Runner Beans are grown for their edible beans and as an ornamental: plants produce brilliant red flowers that attract hummingbirds and multicolored seeds. Some varieties have white flowers. The seed pods have a knife-like shape and are usually green, but some purple cultivars exist. Pods are 15-30cm long and contain 6-10 2.5cm seeds. Different varieties have different colored seeds. Seeds can eaten fresh or as dried beans, but must be cooked to remove toxins. Blooms can be added to salads. Young pods can be cooked like green beans. Roots are eaten by indigenous peoples in Central America. Runner Beans benefit from trellising.', 
'Full Sun', 
'Direct seed outdoors once soil temperatures are above 10°C.',
'20 centimeters', 
'green2', 
'https://www.gardeningknowhow.com/wp-content/uploads/2009/03/lima-beans-400x600.jpg', 
'Images/Plant_Icons/beans.png', 
9), 

('Bell Pepper', 
'Capsicum Annuum', 
'The bell pepper is a cultivar group of the species Capsicum annuum. Bell pepper cultivars produce fruits in colors including red, yellow, orange, green, brown, white, and purple. The fruit is often mildly sweet, because this specific cultivar does not produce capsaicin, the chemical responsible for other peppers'' spiciness.', 
'Full Sun', 
'Purchase plants. Transplant when soil is warm.',
'45 centimeters', 
'orange1', 
'https://images.pexels.com/photos/5529601/pexels-photo-5529601.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/bell.png', 
1), 

('Broccoli', 
'Brassica Oleracea', 
'Broccoli has large flower heads known as "crowns" that are green to blue-green in color, grouped tightly together atop a thick stem, and surrounded by leaves. Broccoli resembles cauliflower, a different cultivar in its species. It thrives in cool weather.', 
'Full Shade', 
'Sow seeds indoors and transplant outside.',
'40 centimeters', 
'green3', 
'https://images.pexels.com/photos/12333180/pexels-photo-12333180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
'Images/Plant_Icons/broccoli.png', 
2), 

('Brussel Sprouts', 
'Brassica Oleracea cv. Gemmifera', 
'Brussels sprouts grow on the sides of stalks up to 91cm tall. The stalks are covered with leaves and the sprouts look like miniature cabbages. They are a cool weather crop and are delicious roasted.', 
'Full Shade', 
'Sow seeds indoors, harden off seedlings before transplanting outdoors.',
'60 centimeters', 
'green3', 
'https://cdn.britannica.com/76/183476-050-C5EDE163/Brussels-sprouts-stem.jpg', 
'Images/Plant_Icons/brussel.png', 
3),

('Celery', 
'Apium Graveolens', 
'The celery plant has long fibrous stalks that taper into leaves. The stalks and leaves can both be eaten. Celery seed is also used as a spice. Celery seed extracts are used in medicines.', 
'Full Shade', 
'Sow seeds indoors 10-12 weeks before transplanting outdoors.',
'15 centimeters', 
'green5', 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFWMqpgnX8sTyb7VOkymb_5MQMFENN_Ae5w&usqp=CAU', 
'Images/Plant_Icons/celery.png', 
4),

('Corn', 
'Zea Mays', 
'Corn is a large grain plant, or tall grass, first domesticated about 10,000 years ago by indigenous peoples in Southern Mexico. The leafy stalk produces ears after pollination. Depending on the variety, the corn can be eaten fresh, or dried and ground into cornmeal.', 
'Full Sun', 
'Direct seed outdoors.',
'75 centimeters', 
'yellow2', 
'https://images.pexels.com/photos/872483/pexels-photo-872483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
'Images/Plant_Icons/corn.png', 
5),

('Daikon', 
'Raphanus Sativus var. Longipinnatus', 
'Daikons are a mild-flavored, large, long, white radish. They are native to Southeast and continental East Asia and do best in cool weather. They are grown for culinary and tillage purposes. Smaller daikon are less fibrous and preferred for soups and stews, but larger daikon can be eaten raw, grated into salads, and pickled. Daikon can also be grown for their sprouts, which grow rapidly and add a nice, bitter crunch to salads and sandwiches. Daikon are a valuable tillage radish and winter cover crop because the roots leave behind large cavities in the soil when they decay. As they grow, the roots aerate the soil and break up the hardpan, making it easier for water and nutrients to move through the soil. Subsequent root crops (like potatoes) can penetrate the soil better, grow larger, and produce higher yields.', 
'Full Sun', 
'Direct seed outdoors.',
'10 centimeters', 
'white', 
'https://cdn.shopify.com/s/files/1/0972/6282/products/minowase-daikon-radish-heirloom-55-days-vegetables-pinetree-garden-seeds_456.jpg?v=1542824834', 
'Images/Plant_Icons/daikon.png', 
6), 

('Fennel', 
'Foeniculum Vulgare', 
'Fennel is a flowering plant species with yellow flowers and feathery leaves. It is grown primarily for its bulbous white base and green leaf stalks, which have a mild, fresh licorice flavor. It''s base and stalks are delicious roasted, grilled, or eaten fresh. Do not let fennel go to seed: it can become invasive.', 
'Partial Sun', 
'Direct seed outdoors, or sow indoors and harden off before transplanting outside.',
'15 centimeters', 
'green5', 
'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/fennel-bulb.jpg', 
'Images/Plant_Icons/fennel.png', 
7),

('Garlic', 
'Allium Sativum', 
'The garlic plant has a bulbous root separated into cloves and a tall stalk with branching leaves. The plant has two main subspecies: hard and soft neck. The choice between which subspecies to grow depends on latitude and at what point in the growing season you will be planting the crop: garlic can be day-length sensitive. Hard-neck garlic is usually grown in cooler climates and creates larger cloves. Soft-neck garlic is grown in warmer climates and produces smaller, tightly-packed cloves. Be sure to trim garlic scapes before they flower - this will focus the plant''s energy into bulb growth, resulting in larger cloves and bulbs. Scapes have a fresh, light garlic flavor. They are delicious raw or cooked, and make a great pesto.', 
'Partial Sun', 
'Direct seed large cloves.',
'10 centimeters', 
'white', 
'https://gardenerspath.com/wp-content/uploads/2019/12/Hand-Holding-Up-Bunch-of-Fresh-Garlic.jpg', 
'Images/Plant_Icons/garlic.png', 
8), 

('Ginger', 
'Zingiber Officinale', 
'Ginger is a flowering, perennial, herbaceous plant native to Southern Asia’s tropical rainforests. It is in the Zingiberaceae family, which also includes turmeric. Temperatures below 9°C can kill the plant, and it will not germinate in cold soil. Ginger prefers sun in the morning and shade in the afternoon. It can be grown in containers or greenhouses in colder climates to extend the growing season. Propagate ginger by planting rhizomes or roots. It can be harvested after 4-6 months as “Baby Ginger.” Baby Ginger does not have a skin on it yet - instead the rhizome is pink and cream-colored, very tender and juicy, and less spicy. Mature ginger has fibrous, dry, yellow flesh with a tan skin and spicier flavor. Ginger takes 10-12 months to mature and is harvested when the stalk has withered. Ayurveda and other traditional medicines use ginger to reduce pain and inflammation, soothe upset stomachs, and boost metabolism.', 
'Partial Sun', 
'Direct seed roots outdoors.',
'20 centimeters', 
'yellow1', 
'https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2019/11/Common-Ginger_2.jpg', 
'Images/Plant_Icons/ginger.png', 
9),

('Leek', 
'Allium Porrum', 
'The leek is a vegetable, a cultivar of Allium ampeloprasum, the broadleaf wild leek. The onion and garlic are also related, being other species of the genus Allium. Plant their leeks in autumn, and they should fatten up in time for winter picking. Plant them early to ensure they have enough time to grow before winter. Leeks take up to six months to mature after transplanting. Maturity is often affected by temperature, available nutrients and water. Leeks need a soil that is rich in organic matter. Dig in compost or manure two weeks before planting. Plant seedlings in full sun, with moist but well-drained deep soil. Raised beds are ideal. Water young plants frequently. The white part of the leek is edible; the green is not. Dig carefully around the leek and lift with a garden fork. Do not pull, as the leek is likely to break.', 
'Partial Sun', 
'Direct seed or transplant seedlings.',
'25 centimeters', 
'green4', 
'https://gardenerspath.com/wp-content/uploads/2019/11/Large-Mature-Leek-Plant.jpg', 
'Images/Plant_Icons/leek.png', 
1),

('Mushroom', 
'Dikarya', 
'Mushrooms are the fleshy, spore-bearing, fruiting body of a fungus. Mushrooms often have a stem, a cap, and gills on the underside of the cap - but not always. Commonly cultivated mushrooms include Oyster (the easiest and best for beginners), Shittake, King Stropharia or Wine Cap, Maitake, Lion''s Mane, and Reishi. Mushrooms are generally grown by obtaining spores and inoculating a substrate (compost, cardboard, etc. Different types prefer different substrates) with the spores. Mushrooms can be grown indoors or outdoors, but it is often easier to cultivate them indoors because the light and moisture can be more thoroughly controlled. More growing information is available in individual species entries.', 
'Full Shade', 
'Sprinke spores on surface of compost and peat moss, gently mix in, and press down.',
'0 centimeters', 
'brown', 
'https://images.pexels.com/photos/5429056/pexels-photo-5429056.png?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/mushroom.png', 
2),

('Onion', 
'Allium Cepa', 
'The onion plant has a fan of hollow, bluish-green leaves and its bulb at the base of the plant begins to swell when a certain day-length is reached. The bulbs are composed of shortened, compressed, underground stems surrounded by fleshy modified scale (leaves) that envelop a central bud at the tip of the stem. In the autumn (or in spring, in the case of overwintering onions), the foliage dies down and the outer layers of the bulb become more dry and brittle. The crop is harvested and dried and the onions are ready for use or storage.', 
'Full Sun', 
'Start indoors.',
'15 centimeters', 
'purple', 
'https://images.pexels.com/photos/12306358/pexels-photo-12306358.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/onion.png', 
3), 

('Pea', 
'Pisum Sativum var. Macrocarpon', 
'Snap peas are a cultivar group of edible-podded peas that have round pods instead of flat pods (like snow peas). They were developed in 1952 by cross-breeding snow pea with a mutant shell pea plant. The pods are edible and contain 3-8 peas. They are harvested when they are bright green, young, and tender. Snap peas are a cool weather crop and require trellising to support their climbing vines.', 
'Full Sun', 
'Direct seed outdoors, thin to 12cm apart when seedlings are 3cm high.',
'12 centimeters', 
'green5', 
'https://images.pexels.com/photos/4750262/pexels-photo-4750262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
'Images/Plant_Icons/peas.png', 
4), 

('Potato', 
'Solanum Tuberosum', 
'Potatoes are starchy root vegetables in the Solanaceae, or Nightshade, family, which also includes tomatoes, eggplants, and peppers. They originated in South America, and spread to become a worldwide staple. The leaves and fruit are usually poisonous and the stem tuber is the only edible part once it is cooked. The potato can be cooked in many ways, brewed into alcohol, and also used as the basis for creating bioplastics. More growing information is available in individual species entries.', 
'Full Sun', 
'Direct seed outdoors after last frost. Each piece must have one eye.',
'90 centimeters', 
'brown', 
'https://hips.hearstapps.com/hmg-prod/images/potatoe-1628714182.jpg', 
'Images/Plant_Icons/potato.png', 
5),

('Radish', 
'Raphanus Sativus', 
'Radishes are fast-growing cool season root vegetables in the Brassica family. Their taproots come in variety of shapes, sizes, and colors and have a sharp, spicy taste. They are usually eaten raw and added to salads. Radishes need cool weather and moist soil - they do not do well in hot, dry environments. More growing information is available in individual species entries.', 
'Full Sun', 
'Direct seed outdoors.',
'10 centimeters', 
'red2', 
'https://images.pexels.com/photos/12612096/pexels-photo-12612096.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/radish.png', 
6),

('Spinach', 
'Spinacia Oleracea', 
'Spinach is an annual plant whose deep green leaves are eaten as a vegetable. It grows best in cooler weather. It can be eaten raw or cooked.', 
'Full Shade', 
'Direct seed outdoors, thin to 15cm when seedlings are 3cm high.',
'30 centimeters', 
'green2', 
'https://www.cravethegood.com/wp-content/uploads/2022/02/spinach-plant-1.jpg', 
'Images/Plant_Icons/spinach.png', 
7), 

('Sweet Potato', 
'Ipomoea Batata', 
'The sweet potato is a large, starchy, tuberous root. The tuber is long and tapered and has yellow, orange, red, brown, purple, or beige skin. It''s flesh can be white, red, pink, violet, yellow, orange, or purple. Sweet potato cultivars with white or pale yellow flesh are not as sweet and moist as those with red, pink or orange flesh. The heart-shaped leaves and vines are sometimes eaten as greens when the plants are young, but eating the leaves interferes with the growth of the tuber underground. The sweet potato is not related to the potato or the yam.', 
'Full Shade', 
'Slips.',
'35 centimeters', 
'orange2', 
'https://images.pexels.com/photos/2889344/pexels-photo-2889344.jpeg?auto=compress&cs=tinysrgb&w=800', 
'Images/Plant_Icons/sweetpotato.png', 
8), 

('Zuchini', 
'Cucurbita Pepo', 
'Green Griller Zucchini As the name suggests, this variety of zucchini squash is practically made for the grill. Oblong zucchinis are fatter and blockier than other varieties, yielding broad slices that are easy to flip. Fruits grow on a low, open bush, so picking them is a cinch. Leaves boast a green and silver variegated pattern that looks really attractive in the garden. Fruits mature quite quickly!Resistant to Zucchini Yellow Mosaic Virus. Fruit is 6-7 in long.', 
'Full Sun', 
'Direct seed 2 seeds, thin to 1 plant when seedlings have 2 sets of leaves.',
'90 centimeters', 
'green2', 
'https://images.pexels.com/photos/4750288/pexels-photo-4750288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
'Images/Plant_Icons/zuchini.png', 
9); 



----------------------------------------------------------------------


INSERT INTO "companion" ("main_plant", "helper_plant", "relationship")
	VALUES 
	
(1, 'Asparagus', 'Asparagus repels nematodes.'), 
(1, 'Radish', 'Flea beetles much prefer radish foliage to tomatoes and will chew ragged holes in the radish leaves instead of destroying young tomato plants.'),
(2, 'Peas', 'Eggplants need to absorb a significant amount of nitrogen and peas leach additional nitrogen into the surrounding soil.'), 
(2, 'Beans', 'Bush beans also repel the Colorado potato beetle, a great connoisseur of eggplant.'),
(3, 'Garlic', 'Garlic planted alongside cabbage repels insects with its odor.'),
(4, 'Corn', 'Squash is traditionally planted with corn and beans (“three sisters”) to disorient the adult vine borer.'),
(5, 'Leek', 'Leeks are thought to repel many flying pests - including carrot rust fly.'),
(6, 'Radish', 'Radish repels cucumber beetles and flea beetles.'),
(7, 'Onion', 'Onions protect against borers and cutworms.'),
(8, 'Onion', 'Alliums are great companion plants for hot peppers because they deter aphids and beetles.'),
(9, 'Garlic', 'Chives, onions, and garlic deter aphids and other pests by masking the scent of the lettuce with their aroma.'),
(9, 'Radish', 'Radishes can be used as a trap crop for flea beetles.'),
(10, 'Corn', 'Corn will benefit from the beans’ nitrogen-fixing capabilities.'),
(11, 'Leek', 'Leeks are strong-smelling crop that will deter butterflies, flea beetles and aphids.'),
(11, 'Radish', 'Radish will act as a trap, drawing flea beetles away from your kale early on in the season.'),
(12, 'Celery', 'Celery also attracts beneficial insects and is a water hog, which means while it may utilize plenty of water, it leaves more nutrients in the soil for the cauliflower.'),
(12, 'Beans', 'Beans and cauliflower are an ideal combo. Both plants deter pests and attract beneficial insects.'),
(13, 'Peas', 'Peas, in particular, are good artichoke plant companions because they exude nitrogen that artichokes will gladly leech up from the soil.'),
(14, 'Tomato', 'Tomatoes are thought to deter asparagus beetles.'),
(15, 'Corn', 'Corn will benefit from the beans’ nitrogen-fixing capabilities. Pole beans provide structural support.'),
(16, 'Eggplant', 'Eggplant, a member of the nightshade family along with peppers, thrives alongside peppers.'),
(16, 'Peas', 'Peas fix nitrogen into the soil, a necessary nutrient for peppers, and also help block wind and sun.'),
(17, 'Beets', 'Beets aren’t bothered by broccoli hogging all the calcium in the soil, and add magnesium to the ground.'),
(17, 'Onion', 'Onions give broccoli better flavor when they are grown near each other.'),
(18, 'Garlic', 'Garlic and other alliums like leeks, shallots, and onions also enhance the sweetness of mature Brussels sprouts. Alliums have anti-fungal properties that work as a natural insect repellent within the soil.'),
(18, 'Beets', 'Beets add a boost of fertilization to the soil, namely magnesium, which is a crucial component of growing successful Brussels sprouts.'),
(19, 'Leek', 'Alliums like garlic, leeks, shallots, and onions enhance the sweetness of a celery crop, and their anti-fungal properties also work as a natural insect repellent within the soil.'),
(20, 'Beans', 'Pole beans are sometimes interplanted with corn, adding nitrogen and providing structural support.'),
(20, 'Spinach', 'Spinach grows well in the shade of corn, keeping corn roots cool.'),
(21, 'Beans', 'One of the “Three Sisters,” pole beans are a great plant to grow with radishes because they provide much-needed nitrogen in the soil.'),
(22, 'Note', 'Not a companion for any garden food plant, fennel will actually inhibit growth in bush beans, kohlrabi, tomatoes, and others. Plant it, but keep it out of the veggie garden.'),
(24, 'Beans', 'Legumes attract beneficial bacteria with their roots, which feed on nitrogen in the air and store it as nitrates in the soil for other plants to use'),
(25, 'Carrot', 'Can enhance the flavor of your leeks.'),
(25, 'Spinach', 'Keep the soil moist.'),
(27, 'Garlic', 'Onions and garlic planted in the same bed means you can rotate your crops more easily. But it should also be remembered that they do tend to enjoy the same growing conditions.'),
(28, 'Corn', 'Cornstalks make a perfect natural trellis for pea tendrils.'),
(28, 'Radish', 'The slow growth rate of peas allows radishes—a fast-growing root vegetable—to develop without being disturbed.'),
(29, 'Beans', 'Beans can improve the size of potato tubers.'),
(29, 'Cabbage', 'Potatoes are a great choice for planting near plants in the cabbage (brassicas) family—including broccoli, cabbage, cauliflower, collard greens, kale, and kohlrabi—because these plants have shallow root systems that won’t compete for the space or nutrients that potatoes need.'),
(30, 'Peas', 'Peas give nitrogen to the soil which benefits radishes.'),
(30, 'Eggplant', 'Large eggplants provide shade for radishes as they grow. Conversely, radishes help eggplants by repelling pests.'),
(31, 'Peas', 'Peas and beans provide natural shade for spinach.'),
(31, 'Radish', 'Radishes make good companions to Spinach. They can serve as a trap crop for leaf-mining insects.'),
(32, 'Spinach', 'Spinach acts as an effective cover plant, making for one of the best companion plants.'),
(32, 'Garlic', 'Garlic wards off pests with its potent aroma.'),
(33, 'Beans', 'Beans fix nitrogen levels in soil to balance the pH level.'),
(33, 'Garlic', 'Garlic possesses strong sulfur compounds, which repels pests like aphids.');


----------------------------------------------------------------------		

INSERT INTO "tips" (tip)
VALUES 

('Perennials generally need three years to achieve their mature size after you plant them. Remember the adage that they "sleep, creep, and leap" each year, respectively.'),
('If you have poorly drained soil where water pools, plant veggies in a raised bed or raised row for improved drainage. Wet soil means wet roots, which can turn into rotted roots. If you have rocky soil, till and remove the rocks, as they will interfere with root growth and make for weaker plants.'),
('Avoid places that receive strong winds that could knock over your young plants or keep pollinators from doing their job. Nor do you want to plant in a location that receives too much foot traffic or floods easily. Plant in a location that would make Goldilocks smile—somewhere that’s “just right.”'),
('You soil feeds your plants. If you have thin, nutrient-poor soil, you’ll have poor, unhealthy plants. Mix in plenty of organic matter to help your plants grow.'),
('If its getting cold and you have tomatoes still ripening on the vine — save your tomatoes! Pull the plants up and bring them inside to a warm dry place. Hang them up, and the tomatoes will ripen on the vine.'),
('Companion planting is an excellent way to improve your garden. Some plants replenish nutrients lost by another one, and some combinations effectively keep pests away.'),
('There is an easy way to mix compost into your soil without a lot of back breaking work: Spread the compost over your garden in the late fall, after all the harvesting is done. Cover with a winter mulch such as hay or chopped leaves and let nature take its course. By spring, the melting snow and soil organisms will have worked the compost in for you.'),
('Like vining vegetables, but don’t have the room? Train your melons, squash, and cucumbers onto a vertical trellis or fence. Saves space and looks pretty too.'),
('Garden vegetables that become over-ripe are an easy target for some pests. Remove them as soon as possible to avoid detection.'),
('Onions are ready to harvest when the tops have fallen over. Let the soil dry out, harvest, and store in a warm, dry, dark place until the tops dry. Cut off the foliage down to an inch, then store in a cool, dry area.'),
('Keep dirt off lettuce and cabbage leaves when growing by spreading a 1-2 inch layer of mulch (untreated by pesticides or fertilizers) around each plant. This also helps keep the weeds down.'),
('When planting a flower or vegetable transplant, deposit a handful of compost into each hole. Compost will provide transplants with an extra boost that lasts throughout the growing season.'),
(' Insects can’t stand plants such as garlic, onions, chives and chrysanthemums. Grow these plants around the garden to help repel insects.'),
('Milk jugs, soda bottles and other plastic containers make great mini-covers to place over your plants and protect them from frost.'),
('For easy peas, start them indoors. The germination rate is far better, and the seedlings will be healthier and better able to fight off pests and disease.'),
('Another reason to use natural and organic fertilizers and soil amendments: earthworms love them! Earthworms are extremely beneficial in the vegetable garden; increasing air space in the soil and leaving behind worm castings. Do what you can to encourage earthworms in your soil.'),
('Diatomaceous earth makes an excellent organic insecticide – it is an abrasive white powder used to damage the cuticle, skin and joints of insects. It also makes an excellent slug barrier.'),
('Some vegetables actually become better after a first frost, including kale, cabbage, parsnips, carrots, and Brussels sprouts.');


