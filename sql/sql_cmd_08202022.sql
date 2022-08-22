USE usedgoods;

DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
 id INT AUTO_INCREMENT PRIMARY KEY,
 user_name VARCHAR(25) NOT NULL,
 password VARCHAR(100) NOT NULL,
 email_address VARCHAR(50) NOT NULL,
 first_name VARCHAR(25),
 last_name VARCHAR(25),
 street VARCHAR(50),
 city VARCHAR(25),
 state VARCHAR(5),
 country VARCHAR(25),
 zip_code VARCHAR(15),
 phone_number VARCHAR(15)
);

DROP TABLE IF EXISTS sellers;

CREATE TABLE sellers (
 id INT AUTO_INCREMENT PRIMARY KEY,
 user_name VARCHAR(25) NOT NULL,
 password VARCHAR(100) NOT NULL,
 email_address VARCHAR(50) NOT NULL,
 first_name VARCHAR(25),
 last_name VARCHAR(25),
 street VARCHAR(50),
 city VARCHAR(25),
 state VARCHAR(5),
 country VARCHAR(25),
 zip_code VARCHAR(15),
 phone_number VARCHAR(15)
);

DROP TABLE IF EXISTS bank_accounts;

CREATE TABLE bank_accounts (
 id INT AUTO_INCREMENT PRIMARY KEY,
 bank_name VARCHAR(25) NOT NULL,
 account_number VARCHAR(25) NOT NULL,
 routing_number VARCHAR(25) NOT NULL,
 seller_id INT NOT NULL,
 default_account INT NOT NULL
);

DROP TABLE IF EXISTS products;

CREATE TABLE products (
 id INT AUTO_INCREMENT PRIMARY KEY,
 product_name VARCHAR(100) NOT NULL,
 price FLOAT NOT NULL,
 quantity INT NOT NULL,
 category VARCHAR(25) NOT NULL,
 image VARCHAR(100) NOT NULL,
 short_description VARCHAR(2000) NOT NULL,
 full_description VARCHAR(2000) NOT NULL,
 seller_id INT NOT NULL,
 comments_count INT NOT NULL
);

DROP TABLE IF EXISTS orders;

CREATE TABLE orders (
 id INT AUTO_INCREMENT PRIMARY KEY,
 product_id INT NOT NULL,
 price FLOAT NOT NULL,
 quantity INT NOT NULL,
 customer_id INT NOT NULL,
 seller_id INT NOT NULL,
 type VARCHAR(10) NOT NULL,
 time DATETIME NOT NULL,
 status VARCHAR(10) NOT NULL
);

DROP TABLE IF EXISTS payment_methods;

CREATE TABLE payment_methods (
 id INT AUTO_INCREMENT PRIMARY KEY,
 card_type VARCHAR(10) NOT NULL,
 card_number VARCHAR(50) NOT NULL,
 expiration VARCHAR(10) NOT NULL,
 cvv VARCHAR(10) NOT NULL,
 customer_id INT NOT NULL,
 default_payment INT NOT NULL
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
 id INT AUTO_INCREMENT PRIMARY KEY,
 product_id INT NOT NULL,
 customer_id INT NOT NULL,
 customer_name VARCHAR(50) NOT NULL,
 content VARCHAR(50) NOT NULL,
 time DATETIME NOT NULL,
 rating INT NOT NULL
);

DROP TABLE IF EXISTS carts;

CREATE TABLE carts (
 id INT AUTO_INCREMENT PRIMARY KEY,
 product_id INT NOT NULL,
 customer_id INT NOT NULL,
 product_quantity INT NOT NULL,
 removed INT NOT NULL
);

DROP TABLE IF EXISTS wishlists;

CREATE TABLE wishlists (
 id INT AUTO_INCREMENT PRIMARY KEY,
 product_id INT NOT NULL,
 customer_id INT NOT NULL,
 removed INT NOT NULL
);

DROP TABLE IF EXISTS geo_locations;

CREATE TABLE geo_locations (
 id INT AUTO_INCREMENT PRIMARY KEY,
 seller_id INT NOT NULL,
 latitude FLOAT NOT NULL,
 longitude FLOAT NOT NULL
);


INSERT INTO usedgoods.customers (user_name, password, first_name, last_name, street, city, state, country, zip_code, email_address, phone_number)
VALUES ('thanks', 'thanks', 'Tom', 'Hanks', '123 Main St.', 'San Francisco', 'CA', 'United States', '94016', 'tom.hanks@gmail.com', '123-456-7890');

INSERT INTO usedgoods.customers (user_name, password, first_name, last_name, street, city, state, country, zip_code, email_address, phone_number)
VALUES ('bpitt', 'bpitt', 'Brad', 'Pitt', '404 Main St.', 'New York', 'NY', 'United States', '10001', 'brad.pitt@gmail.com', '234-567-8901');

INSERT INTO usedgoods.customers (user_name, password, first_name, last_name, street, city, state, country, zip_code, email_address, phone_number)
VALUES ('wsmith', 'wsmith', 'Will', 'Smith', '231 Main St.', 'Seattle', 'WA', 'United States', '98101', 'will.smith@gmail.com', '345-678-9012');

INSERT INTO usedgoods.customers (user_name, password, first_name, last_name, street, city, state, country, zip_code, email_address, phone_number)
VALUES ('estone', 'estone', 'Emma', 'Stone', '901 Main St.', 'Los Angeles', 'CA', 'United States', '90001', 'emma.stone@gmail.com', '456-789-0123');

INSERT INTO usedgoods.sellers (user_name, password, first_name, last_name, street, city, state, country, zip_code, email_address, phone_number)
VALUES ('tjohns', 'tjohns', 'Tom', 'Johns', '135 Main St.', 'Los Angeles', 'CA', 'United States', '90001', 'tom.johns@gmail.com', '456-789-0123');

INSERT INTO usedgoods.sellers (user_name, password, first_name, last_name, street, city, state, country, zip_code, email_address, phone_number)
VALUES ('jdavidson', 'jdavidson', 'Jack', 'Davidson', '905 Main St.', 'Seattle', 'WA', 'United States', '98101', 'jack.davidson@gmail.com', '456-789-0123');

INSERT INTO usedgoods.sellers (user_name, password, first_name, last_name, street, city, state, country, zip_code, email_address, phone_number)
VALUES ('tdunkon', 'tdunkon', 'Tim', 'Dunkon', '254 Main St.', 'San Francisco', 'CA', 'United States', '94016', 'tim.dunkon@gmail.com', '456-789-0987');

INSERT INTO usedgoods.sellers (user_name, password, first_name, last_name, street, city, state, country, zip_code, email_address, phone_number)
VALUES ('bhardson', 'bhardson', 'Benny', 'Hardson', '905 Second St.', 'New York', 'NY', 'United States', '10001', 'benny.hardson@gmail.com', '456-709-0145');

INSERT INTO usedgoods.bank_accounts (bank_name, account_number, routing_number, seller_id, default_account)
VALUES ('Bank of America', '902830928', '230492304', '1', '1');

INSERT INTO usedgoods.bank_accounts (bank_name, account_number, routing_number, seller_id, default_account)
VALUES ('Bank of America', '902830929', '230492304', '2', '1');

INSERT INTO usedgoods.bank_accounts (bank_name, account_number, routing_number, seller_id, default_account)
VALUES ('Wells Fargo', '902830987', '230492305', '3', '1');

INSERT INTO usedgoods.bank_accounts (bank_name, account_number, routing_number, seller_id, default_account)
VALUES ('Chase', '902830091', '230492306', '4', '1');

INSERT INTO usedgoods.geo_locations (seller_id, latitude, longitude) 
VALUES ('1', 34.052235, -118.243683);

INSERT INTO usedgoods.geo_locations (seller_id, latitude, longitude) 
VALUES ('2', 47.608013, -122.335167);

INSERT INTO usedgoods.geo_locations (seller_id, latitude, longitude) 
VALUES ('3', 37.773972, -122.431297);

INSERT INTO usedgoods.geo_locations (seller_id, latitude, longitude) 
VALUES ('4', 40.730610, -73.935242);


INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Gray Color Men's Watch", 4500.00, 10, "Men's Watches", "img/product/img1.jpg", "placeholder", "placeholder", 4, 215);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Levi's Jeans Pant", 200.00, 10, "Men's Pants", "img/product/img2.jpg", "placeholder", "placeholder", 2, 214);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Black Men's Watch", 4000.00, 10, "Men's Watches", "img/product/img3.jpg", "placeholder", "placeholder", 1, 213);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Nick Black Sneakers", 320.00, 10, "Men's Shoes", "img/product/img4.jpg", "placeholder", "placeholder", 3, 212);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Wood Frame Sun Glass", 1200.00, 10, "Glasses", "img/product/img5.jpg", "placeholder", "placeholder", 3, 211);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Leather Hand Bag", 3800.00, 10, "Women's Hand Bags", "img/product/img6.jpg", "placeholder", "placeholder", 2, 210);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Men's Sneaker", 3500.00, 10, "Men's Shoes", "img/product/img7.jpg", "placeholder", "placeholder", 1, 209);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Brown Leather Hand Bag", 5200.00, 10, "Women's Hand Bags", "img/product/img8.jpg", "placeholder", "placeholder", 4, 208);



INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 109.95, 94, "men's clothing", "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "desc", 4, 98);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Mens Casual Premium Slim Fit T-Shirts ", 22.30, 59, "men's clothing", "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.", "desc", 2, 42);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Mens Cotton Jacket", 55.99, 34, "men's clothing", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.", "desc", 3, 34);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Mens Casual Slim Fit", 15.99, 68, "men's clothing", "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg", "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.", "desc", 2, 94);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", 695.00, 70, "jewelery", "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.", "desc", 1, 89);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Solid Gold Petite Micropave ", 168.00, 41, "jewelery", "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.", "desc", 2, 58);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("White Gold Plated Princess", 9.99, 28, "jewelery", "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg", "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...", "desc", 4, 78);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Pierced Owl Rose Gold Plated Stainless Steel Double", 10.99, 44, "jewelery", "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg", "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel", "desc", 3, 90);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("WD 2TB Elements Portable External Hard Drive - USB 3.0 ", 64.00, 73, "electronics", "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg", "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system", "desc", 1, 73);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s", 109.00, 56, "electronics", "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg", "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)", "desc", 1, 88);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5", 109.00, 47, "electronics", "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg", "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.", "desc", 1, 61);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive", 114.00, 62, "electronics", "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg", "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty", "desc", 4, 34);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin", 599.00, 79, "electronics", "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg", "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz", "desc", 4, 7);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ", 999.99, 37, "electronics", "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg", "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag", "desc", 3, 24);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats", 56.99, 52, "women's clothing", "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg", "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates", "desc", 4, 81);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket", 29.95, 63, "women's clothing", "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg", "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON", "desc", 1, 99);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Rain Jacket Women Windbreaker Striped Climbing Raincoats", 39.99, 27, "women's clothing", "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg", "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.", "desc", 1, 46);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("MBJ Women's Solid Short Sleeve Boat Neck V ", 9.85, 70, "women's clothing", "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg", "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem", "desc", 2, 17);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("Opna Women's Short Sleeve Moisture", 7.95, 52, "women's clothing", "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg", "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort", "desc", 3, 19);
INSERT INTO usedgoods.products (product_name, price, quantity, category, image, short_description, full_description, seller_id, comments_count)
VALUES ("DANVOUY Womens T Shirt Casual Cotton Short", 12.99, 80, "women's clothing", "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg", "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.", "desc", 3, 21);
