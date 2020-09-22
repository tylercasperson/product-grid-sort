DROP DATABASE IF EXISTS ProductGridSort;
CREATE DATABASE ProductGridSort;
USE ProductGridSort;
CREATE TABLE products (
    id int auto_increment,
    title varChar(255),
    description varChar(255),
    price decimal (13, 2),
    quantity int,
    imageURL varChar (255),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
INSERT INTO products (
        title,
        description,
        price,
        quantity,
        imageURL,
        createdAt,
        updatedAt
    )
VALUES (
        'cabinet',
        'Hickory cabinet, pull down desk, 3 drawer, 5 shelve sections',
        '100.00',
        '30',
        'https://cdn.pixabay.com/photo/2019/02/19/09/08/cabinet-4006406_1280.png',
        '2020-09-21 00:00:00',
        '2020-09-21 00:00:00'
    ),
    (
        'tall cabinet',
        'Tall cabinet, light hickory, 1 drawer, 3 shelve sections',
        '120.00',
        '10',
        'https://cdn.pixabay.com/photo/2014/07/03/19/15/tall-cabinet-383165_1280.jpg',
        '2020-09-21 00:00:00',
        '2020-09-21 00:00:00'
    ),
    (
        'typewritter',
        'Manual typewriter restored from 1970',
        '300.00',
        '1',
        'https://cdn.pixabay.com/photo/2016/01/13/16/29/typewriter-1138293_1280.png',
        '2020-09-21 00:00:00',
        '2020-09-21 00:00:00'
    ),
    (
        'almonds',
        'Cup of almonds to snack on',
        '5.00',
        '100',
        'https://cdn.pixabay.com/photo/2015/05/15/14/47/almonds-768699_1280.jpg',
        '2020-09-21 00:00:00',
        '2020-09-21 00:00:00'
    ),
    (
        'wooden camera',
        'Camera carved from pine wood',
        '50.00',
        '5',
        'https://cdn.pixabay.com/photo/2016/09/28/10/18/camera-1700110_1280.jpg',
        '2020-09-21 00:00:00',
        '2020-09-21 00:00:00'
    );