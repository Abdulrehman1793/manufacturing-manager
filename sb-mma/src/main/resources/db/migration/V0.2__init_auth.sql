drop table if exists _user;
CREATE TABLE _user
(
    id         SERIAL PRIMARY KEY,
    name       varchar(100)             not null unique,
    user_name  varchar(50)              not null unique,
    email      varchar(100)             not null unique,
    password   varchar(250)             not null,
    role       varchar(100)             not null,
    created_at TIMESTAMP WITH TIME ZONE not null,
    updated_at TIMESTAMP WITH TIME ZONE
);

drop table if exists token;
CREATE TABLE token
(
    id         SERIAL primary key,
    expired    boolean      default false,
    revoked    boolean      default false,
    token      varchar(255),
    token_type varchar(255) default 'BEARER',
    user_id    int,
    created_at TIMESTAMP WITH TIME ZONE not null,
    updated_at TIMESTAMP WITH TIME ZONE,
    FOREIGN KEY (user_id) REFERENCES _user (id)
);