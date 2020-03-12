--- creando base de datos
create database crud-nodejs-mysql;

use crud-nodejs-mysql;

create table customer(
    id int(6) unsigned auto_increment primary key,
    name varchar(50) not null,
    address varchar(100) not null,
    phone varchar(9) 
);

select * from customer;
