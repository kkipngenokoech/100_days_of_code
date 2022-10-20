Active records normally does the mappings for you.
while dealing with Active records: you now start coming into contact with classes, objects and attributes.

the implementation of a domain-specific-language (DSL). A DSL is a programming language intended to use in a specific problem domain. It allows you to use dynamically generated methods, like to retrieve a record, method find_by_first_name is used.

## ACTIVE RECORD BASICS
Each table in a database is generally represented by a class that extends Active Record base class. By extending Active Record base classes, model objects inherit a lot of functionalities.

While using Active Records, you don't have to set up any database connections. It manages all the database connections for an appication. It adds attributes to your class for each of the columns in the database.

Active Record naming convention - CoC - convention on configuration, On following naming convention, you can take advantage of many dynamic features of Active Record without any configuration.

## CLASS AND DATABASE
Database table should be named in the plural form and in lowercase of your model classes. i.e `Database tables = students` if `Database Model = Student`

With the help of this convention, Rails will automatically find the corresponding table to your model class without any configuration code