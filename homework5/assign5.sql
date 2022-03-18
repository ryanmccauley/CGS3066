CREATE DATABASE MyDB
USE MyDB

CREATE TABLE Students
(
    StudentID    varchar(64),
    FirstName    varchar(160),
    LastName     varchar(160),
    HourEnrolled int,
    GPA          float,
    Major        varchar(160),
    DOG          DATE,
    PRIMARY KEY StudentID
)

CREATE TABLE Faculty
(
    FacultyID varchar(64),
    FirstName varchar(160),
    LastName varchar(160),
    Department varchar(160),
    yearsEmployed int,
    PRIMARY KEY FacultyID
)

