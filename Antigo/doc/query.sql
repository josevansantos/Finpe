create table transactions (
id int unsigned primary key auto_increment,
date datetime not null,
description varchar (200) not null,
value decimal (10,2) not null,
id_user int unsigned,
foreign key (id_user) references users (id),
type varchar (50) not null
);

create table users (
id int unsigned primary key auto_increment,
name varchar (50)  not null,
password varchar (20) not null,
level int not null
);

use finpe;
drop table transactions;

insert into users (name, password, level) values ("Leandro", "admin123", 1)
