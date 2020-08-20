# CSVToDB
Module that allows you to convert a particular CSV file and store it into a PostgreSQL database.

A test file is included (TestDBFile.csv), that would serve as source CSV file.

The test file contains three columns: Name (STRING), isAdult (BOOLEAN) and Age (INT)

Using this module for your own personal project is easy. All you need is a PostgreSQL database instance. Steps:

* Download zip file or clone the repo

* Replace contents in TestDBFile.csv with your own CSV file's contents.

* In `sqlConnector.js`, replace `process.env.POSTGRES_CONNECTION` with connection string from your PostgreSQL instance.

* Define table and columns. For e.g 

```
    const table = sequelize.define('TABLE_NAME', {
        ColumnOne: Sequelize.STRING,
        ColumnTwo: Sequelize.INTEGER,
    });
 
 ```
 
* Run with `node index.js`.
