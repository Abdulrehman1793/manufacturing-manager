drop table if exists users;
CREATE TABLE users
(
    id         SERIAL PRIMARY KEY,
    name       varchar(100)             not null unique,
    user_name  varchar(50)              not null unique,
    pwd        varchar(250)             not null,
    role       varchar(50)              not null,
    created_at TIMESTAMP WITH TIME ZONE not null,
    updated_at TIMESTAMP WITH TIME ZONE
);

drop table if exists authority;
CREATE TABLE authority
(
    id         SERIAL primary key,
    name       varchar(250)             not null unique,
    user_id    int,
    created_at TIMESTAMP WITH TIME ZONE not null,
    updated_at TIMESTAMP WITH TIME ZONE,
    FOREIGN KEY (user_id) REFERENCES users (id)
);