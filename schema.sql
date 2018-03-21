DROP DATABASE IF EXISTS seeker;

CREATE DATABASE seeker;

USE seeker;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE phases (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  phase_order INT NOT NULL,
  phase_label VARCHAR(100) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE reminders (
  id INT NOT NULL AUTO_INCREMENT,
  due_date DATE NOT NULL,
  text_desc VARCHAR(1000) NOT NULL
);

CREATE TABLE files (
  id INT NOT NULL AUTO_INCREMENT,
  s3_url VARCHAR(1000)
);

CREATE TABLE applications (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  phase_id INT NOT NULL,
  reminder_id INT,
  resume_id INT,
  cover_letter_id INT,
  job_title VARCHAR(100) NOT NULL,
  company VARCHAR(100) NOT NULL,
  date_created DATE NOT NULL,
  last_update DATE NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (phase_id) REFERENCES phases(id),
  FOREIGN KEY (reminder) REFERENCES reminders(id),
  FOREIGN KEY (resume_id) REFERENCES files(id),
  FOREIGN KEY (cover_letter_id) REFERENCES files(id)
);