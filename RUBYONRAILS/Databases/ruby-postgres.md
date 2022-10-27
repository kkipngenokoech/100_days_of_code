# postgres and ruby

Install this gem `gem install pg` - it helps us to connect to a postgres server.

`sudo apt-get install libpq-dev` - You need install the postgreSQL dev package with header of PostgreSQL.

to connect to a database, lets go create [one](/README.md) in postgres

we connect to the database via `irb`, this helps us to execute sql statements there.

```text
require 'pg'
addressBook = PG.connect ({:dbname => 'address_book'})
```

if it is throwing the error of role doesn't exist create one by `sudo -u postgres createuser -d -e role-name`

you need to grant your newly created user rights `GRANT ALL PRIVILEGES ON TABLE contacts TO kip;`

and also to take care of the `ERROR:  permission denied for sequence contacts_id_seq (PG::InsufficientPrivilege)` ensure you `GRANT USAGE, SELECT ON SEQUENCE contacts_id_seq TO kip;`

running a query in our database: `results = addressBook_db.exec("SELECT * FROM contacts;")`

to loop through it you `result.each {|result| p result}`

our results are a collection of hashes. so you have a key value pairs.

the `exec` method executes sql statements.

## pg

when working with this gem:

1. all values returned in the `pg::results` are in ruby strings so you have to convert them to ruby objects.
2. booleans are represented as `t` or `f`.
3. sql equivalent of ruby's `nil` is `NULL`. so if you don't want to pass a value into your db just pass a NULL parameter.
