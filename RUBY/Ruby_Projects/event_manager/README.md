Imagine that a friend of yours runs a non-profit organization around political activism. A number of people have registered for an upcoming event. She has asked for your help in engaging these future attendees. For the first task, she wants you to find the government representatives for each attendee based on their zip code.

## FILE

file is  a core ruby class that allows you to perform a larger number of operations on the file in your file system.
## File.read()
`content = file.read('name of the file')`
allows us to read the content of the csv
## File.readlines()
`eventLines = File.readlines('event_attendees.csv')`
this allows us to read the contents as array of lines

## event_attendees.csv
it has the following column headers
1. ID
2. RegDate
3. first_name
4. last_name
5. Email_Address
6. HomePhone
7. Street
8. City
9. State
10. Zipcode

We need to convert this headers into an array
this columns are seperated by commas `,`  so whenever we see a comma one has to split.
`columns = line.split(",")`

### next if 
`next if line == " ,RegDate,first_Name,last_Name,Email_Address,HomePhone,Street,City,State,Zipcode\n"`
it checks if the line is similar to the header , if it is true you escape.

## PARSING WITH CSV
`require 'csv'`
this allows us to import ruby's CSV library.
here to import/load data then we:
`CSV.open()`

#### accessing columns by their names:
CSV files with headers have an additional option which allows you to access the column values by their headers

we need to convert this headers into symbols `header_converters: :symbol`
