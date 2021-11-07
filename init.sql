CREATE DATABASE cnab;

--\c into cnab

DROP TABLE IF EXISTS transaction_types;
DROP TABLE IF EXISTS transactions;

CREATE TABLE transaction_types(
  type_id INT PRIMARY KEY,
  description VARCHAR(35) NOT NULL,
  nature_type VARCHAR(8) NOT NULL,
  signal CHAR NOT NULL
);

INSERT INTO transaction_types VALUES(1, 'debito', 'entrada', '+');
INSERT INTO transaction_types VALUES(2, 'boleto', 'saida', '-');
INSERT INTO transaction_types VALUES(3, 'Financiamento', 'saida', '-');
INSERT INTO transaction_types VALUES(4, 'Crédito', 'entrada', '+');
INSERT INTO transaction_types VALUES(5, 'Recebimento Empréstimo', 'entrada', '+');
INSERT INTO transaction_types VALUES(6, 'Vendas', 'entrada', '+');
INSERT INTO transaction_types VALUES(7, 'Recebimento TED', 'entrada', '+');
INSERT INTO transaction_types VALUES(8, 'Recebimento DOC', 'entrada', '+');
INSERT INTO transaction_types VALUES(9, 'Aluguel', 'saida', '-');

CREATE TABLE transactions(
  transaction_id SERIAL PRIMARY KEY,
  type_transaction INT NOT NULL,
  transaction_value NUMERIC NOT NULL,
  cpf VARCHAR(11) NOT NULL,
  card_number VARCHAR(13) NOT NULL,
  date_created DATE NOT NULL,
  hour_created TIME NOT NULL,
  store_own  VARCHAR(15) NOT NULL,
  store_name VARCHAR(20),
  FOREIGN KEY (type_transaction) REFERENCES transaction_types (type_id)
);