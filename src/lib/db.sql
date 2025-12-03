-- Users
CREATE TABLE IF NOT EXISTS users (
  customerID TEXT PRIMARY KEY,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  userImage TEXT NOT NULL
);

-- Invoices
CREATE TABLE IF NOT EXISTS invoices (
  invoiceID TEXT PRIMARY KEY,
  customerID TEXT NOT NULL,
  amount REAL NOT NULL,
  date TEXT NOT NULL,
  paidStatus INTEGER NOT NULL CHECK (paidStatus IN (0, 1)),
  FOREIGN KEY(customerID) REFERENCES users(customerID)
);

INSERT INTO users (customerID, username, email, userImage) VALUES
('1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0001','Tom Preston-Werner','tom@example.com','https://avatars.githubusercontent.com/u/1?v=4'),
('1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0002','Chris Wanstrath','chris@example.com','https://avatars.githubusercontent.com/u/2?v=4'),
('1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0003','PJ Hyett','pj@example.com','https://avatars.githubusercontent.com/u/3?v=4'),
('1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0004','defunkt','defunkt@example.com','https://avatars.githubusercontent.com/u/323?v=4'),
('1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0005','gaearon','gaearon@example.com','https://avatars.githubusercontent.com/u/810438?v=4'),
('1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0006','yyx990803','yyx@example.com','https://avatars.githubusercontent.com/u/499550?v=4'),
('1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0007','ruanyf','ruanyf@example.com','https://avatars.githubusercontent.com/u/905434?v=4'),
('1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0008','octocat','octocat@example.com','https://avatars.githubusercontent.com/u/583231?v=4'),
('1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0009','someuser123','someuser@example.com','https://avatars.githubusercontent.com/u/100000?v=4'),
('1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0010','anotheruser456','another@example.com','https://avatars.githubusercontent.com/u/100001?v=4');

INSERT INTO invoices (invoiceID, customerID, amount, date, paidStatus) VALUES
('d52f08a1-db3c-4cbb-a2e6-8c2a9f0e0001','1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0001',150.0,'2023-09-15',1),
('d52f08a1-db3c-4cbb-a2e6-8c2a9f0e0002','1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0002',89.99,'2023-10-05',0),
('d52f08a1-db3c-4cbb-a2e6-8c2a9f0e0003','1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0003',120.25,'2023-07-20',1),
('d52f08a1-db3c-4cbb-a2e6-8c2a9f0e0004','1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0004',45.6,'2023-08-30',0),
('d52f08a1-db3c-4cbb-a2e6-8c2a9f0e0005','1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0005',230.75,'2023-11-11',1),
('d52f08a1-db3c-4cbb-a2e6-8c2a9f0e0006','1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0006',67.4,'2023-09-25',0),
('d52f08a1-db3c-4cbb-a2e6-8c2a9f0e0007','1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0007',99.9,'2023-06-14',1),
('d52f08a1-db3c-4cbb-a2e6-8c2a9f0e0008','1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0008',10.0,'2023-12-01',0),
('d52f08a1-db3c-4cbb-a2e6-8c2a9f0e0009','1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0009',150.0,'2023-08-01',1),
('d52f08a1-db3c-4cbb-a2e6-8c2a9f0e0010','1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0010',75.25,'2023-10-18',0);
