# artist database

ensure you go through this [README](README.md) first.

## creating databases and tables

CREATE TABLE contacts (...your variables here...i.e name varchar, age int,...)

columns have data types i.e varchar, int, timestamp.

contacts will be the name of our table.

to list the columns in our contacts table we: `\d contacts`.

to see a list of all tables you `\dt`

to delete a table you: `DROP TABLE table_name`

to add a new column you: `ALTER TABLE table_name ADD name_of_column data_type`

to delete a column you: `ALTER TABLE table_name DROP name_of_column`

to add a primary key to our table is: `ALTER TABLE contacts ADD id serial PRIMARY KEY;` - the serial datatype is an auto-incrimenting integer.

to add data to our table we: `INSERT INTO contacts (name, age, birthday) VALUES ('Wes', 43, '1969-05-01');`

in SQL we need to use single quotes when wrapping data, double quotes doesn't work.

to query data from our database - `"select * from contacts`

to quit postgres `\q`.

the next [tutorial](ruby-postgres.md) shows us how to link the postgres database and ruby programs
