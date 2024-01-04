-- Create Enumerations
CREATE TYPE Area AS ENUM ('HARDSKILL', 'SOFTSKILL', 'HEALTH', 'VIRTUE', 'OTHER');
CREATE TYPE UserType AS ENUM ('ERP', 'PUBLIC', 'API', 'SYSTEM', 'ANONYMOUS', 'ROOT');
CREATE TYPE Gender AS ENUM ('MALE', 'FEMALE', 'OTHER');
CREATE TYPE Country AS ENUM ('BRAZIL', 'UNITED_STATES', 'GERMANY', 'JAPAN');

-- Create Tables
CREATE TABLE IF NOT EXISTS users (
  userId SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  photo BYTEA,
  biography TEXT,
  tittle VARCHAR(255),
  description TEXT,
  birth TIMESTAMP,
  phone VARCHAR(255),
  profileDescription TEXT,
  profileStatus VARCHAR(255),
  socialNetwork JSONB,
  interests JSONB,
  preferences JSONB,
  configurations JSONB,
  country Country,
  gender Gender,
  userType UserType NOT NULL DEFAULT 'PUBLIC',
  active BOOLEAN  NOT NULL DEFAULT TRUE,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS items (
  itemId SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  model Area NOT NULL,
  range_min FLOAT,
  range_max FLOAT,
  target FLOAT,
  fk_userId INT REFERENCES users(userId) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS mensurations (
  mensurationId SERIAL PRIMARY KEY  NOT NULL,
  fk_itemId INT REFERENCES items(itemId),
  thisValue FLOAT  NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS tags (
  tagId SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  itemItemId INT REFERENCES items(itemId),
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);