# JSON

JSON is a format of storing and transporting data.
JSON is often used when data is sent from server to a web page.

JSON - javascript object notation

JSON is language independent. code for reading and generating JSON can be written in any programming language.

JSON format is text/string only.

## SYNTAX OF JSON

```javascript
{
    "players": [
        {"firstName": "Christian", "lastName": "Pulisic"},
        {"firstName": "Hakim", "lastName": "Ziyech"},
        {"firstName": "Callum", "lastName": "Hudson Odoi"}
    ]
}
```

JSON format evaluates everything to JavaScript objects

JSON data has key value pairs. `{{},{},{}}`

## CONVERTING JSON TEXT TO A JS OBJECT

a common use of JSON is to read data/object from a web server, and display the data in a web page.

to convert from JSON text to js object you use the `.parse()` method.

## JSON.stringfy()

when you want to send data across the network, you send it in form of JSON, and for that to happen, you `.stringfy()` your data thats is:
`JSON.stringfy(data)`.

this method takes an object and converts it into a string.

then to convert it back to your data you `JSON.parse(data)`.
