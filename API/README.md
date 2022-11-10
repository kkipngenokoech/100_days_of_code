# README

using fetch for apis. thi method is used to request data from a server.

data requested from the server can return any type of API in JSON or XML.

## fetch API

```javascript
fetch('http://localhost....')
.then((response) => response.json())
.then((data) => console.log(data))
```

when you use fetch it returns a promise (Response Object) which has the entire http response, and so when have to jsonfy this response object to help us get our content.

fetch API returns a promise whether it is resolved or not, it can be in json or xml:

1. JSON - javascript object notation, a format used to rep data.
2. XML - xml notation, a format used to represent structured information.
