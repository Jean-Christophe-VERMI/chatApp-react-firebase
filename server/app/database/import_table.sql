-- -----------------------------------------------------
-- Schema react chat app
-- -----------------------------------------------------


-- -----------------------------------------------------
-- Table "users"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "users" ;

CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "isLogged" BOOLEAN NOT NULL DEFAULT FALSE,
  "username" VARCHAR(64) NULL,
  "picture" TEXT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "conversations"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "conversations" ;

CREATE TABLE IF NOT EXISTS "conversations" (
  "id" SERIAL NOT NULL,
  "sender_id" INTEGER NULL,
  "recipient_id" INTEGER NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "messages"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "messages" ;

CREATE TABLE IF NOT EXISTS "messages" (
  "id" SERIAL NOT NULL,
  "conversation_id" INT NOT NULL,
  "sender_id" INTEGER NULL,
  "recipient_id" INTEGER NULL,
  "text" TEXT NULL,
  "message_time" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));