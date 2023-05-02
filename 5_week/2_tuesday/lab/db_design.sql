CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(25) UNIQUE NOT NULL,
    first_name varchar(25) NOT NULL,
    last_name varchar(25) NOT NULL
);

CREATE TABLE category (
	"id" serial PRIMARY KEY NOT NULL,
	"name" VARCHAR(50) NOT NULL
);


CREATE TABLE receipe (
	"id" serial PRIMARY KEY NOT NULL,
	"recipe_name" VARCHAR(50) NOT NULL,
	"category_id" integer NOT NULL REFERENCES category(id),
	"recipe_detail" VARCHAR(50) NOT NULL,
	"user_id" integer NOT NULL REFERENCES users(id)
);


CREATE TABLE ingredients_list (
	"recipe_id" integer NOT NULL,
	"ingredients_id" integer NOT NULL,
	"qty" integer NOT NULL
);


CREATE TABLE ingredients (
	"id" serial PRIMARY KEY NOT NULL,
	"name" VARCHAR(50) NOT NULL
);



CREATE TABLE privacy (
	"recipe_id" integer NOT NULL REFERENCES receipe(id),
	"visibility" BOOLEAN NOT NULL
);



CREATE TABLE grocery_list (
	"user_id" INTEGER NOT NULL REFERENCES users(id),
	"ingredient_id" integer NOT NULL REFERENCES ingredients(id),
	"recipe_id" integer NOT NULL REFERENCES receipe(id)
);