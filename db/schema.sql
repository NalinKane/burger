DROP DATABASE IF EXISTS burgers;

CREATE DATABASE
IF NOT EXISTS burgers;

USE burgers;

DROP 
  TABLE IF EXISTS burger;
CREATE TABLE
IF NOT EXISTS burger
( id INT
(11) NOT NULL auto_increment, 
  burger_name VARCHAR
(30) NOT NULL, 
devoured BOOLEAN,
  PRIMARY KEY
(id)
);





