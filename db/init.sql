DROP TABLE IF EXISTS houses;

create table houses(
  id SERIAL PRIMARY KEY
  ,name varchar(30) not null
  ,address varchar(100) not null
  ,city varchar(100) not null
  ,state varchar(2) not null
  ,zip integer not null
  ,img text
  ,mortgage decimal 
  ,rent decimal
);

insert into houses (name, address, city, state, zip, img)
values ('house1', '123 main st', 'Boonton', 'NJ', 'http://www.autormn.com/house1.jpg');


