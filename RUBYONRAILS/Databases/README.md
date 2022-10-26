# DATABASES

in this section we are going to learn about databases and how they are involved in our ruby on rails project

## relational databases

we are going to create two classes for this [Stage](stage.rb) and [Artist](artist.rb)

### [Stage](stage.rb)

it has three properties:
    - name
    - location
    - capacity

### [Artist](artist.rb)

it has three properties:
    - name
    - members
    - genre

N/B: classes in ruby are capitalized and in singular and so the corresponding databases are plural and lowercase.

an object in ruby stands for a row in databases.

and a column stands for the properties of a class.

## [POSTGRES](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart)

To start the service you `sudo systemctl start postgresql.service`

to login to your postgres account you `sudo -u postgres psql` - this enables you to bypass the instruction authentication and authorizaation.

to create our own database -  `CREATE DATABASE ArtistBase`

to list databases in our postgres we have to : `\l`

the command above is a psql command that is why it has to start with a backslash.

so let switch into our database: `\c name of our database`

### artist_database

with above commands we have created a database and we need to add table and columns to it.

the documentation continues in this file  [Artist Database](artistdb.md)