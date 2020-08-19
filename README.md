# CSVToDB
Module that allows you to convert a particular CSV file and store it into a PostgreSQL database.

A test file is included (TestDBFile.csv), that would serve as source CSV file.

Using this module for your own personal project is easy. All you need is a PostgreSQL database instance. Steps:

* Download zip file or clone the repo

* Replace contents in TestDBFile.csv with your own CSV file's contents.

* In `sqlConnector.js`, replace `process.env.POSTGRES_CONNECTION` with connection string from your PostgreSQL instance.

* Run with `node index.js`.
