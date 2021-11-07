CREATE DATABASE cnab;

--\c into cnab

CREATE TABLE transaction_types(
  type_id SERIAL PRIMARY KEY,
  description VARCHAR(35) NOT NULL,
  nature_type VARCHAR(8) NOT NULL,
  signal CHAR NOT NULL
) 

CREATE TABLE transactions(
  transaction_id SERIAL PRIMARY KEY,
  type_transaction INT NOT NULL,
  transaction_value NUMERIC NOT NULL,
  cpf VARCHAR(11) NOT NULL,
  card_number VARCHAR(13) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  store_own  VARCHAR(15) NOT NULL,
  store_name VARCHAR(20),
  FOREIGN KEY (type_transaction) REFERENCES transaction_types (type_id)
);