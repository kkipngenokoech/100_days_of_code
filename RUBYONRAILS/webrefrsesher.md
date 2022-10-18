## HTTP
It is a way of restructuring the response-request cycle between your browser and the server.

HTTP is at the heart of any web application you could build.
HTTP is a stateless, application-layer protocol for communicating between distributed systems.
[HTTP BASICS](https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)

HTTP requests and responses are sent in human readable form.
every request raised by the browser is independent.

HTTP protocol is stateless - each individual request has to carry all the information needed to fulfil it, this information is passed through headers.

HTTP requests can be raised by various clients and a browser is one of them.

## HTTP VERSIONS
#### HTTP version/2.0
this allows users to send multiple requests simultaneously. - multiplexing, it cuts down time required to load a page.

## HTTP URLs
`https://www.domain.com:1234/path/to/resource?a=b&x=y`
1. https : specifies the protocol which makes communication secure
2. www.domain.com : is the host
3. 1234: is the port the default http port is 80, browser hides the port.
4. path/to/resource : is the resource path, it helps the server identify a specific resource and generates the right response.
5. ?a=b&x=y : query string parameters, used by the server to spot the right resource.


## HTTP REQUESTS
A request message is made up of  the following parts:
1. request line : this says what is being requested, it consists ;
      1. verb - GET/POST what action are you doing/requesting for
      2. a path
      3. HTTP version
2. headers : additional information about the message, the requester, the communication format.
3. Body : this is an optional field, the content of the request.

A simple request
```
GET /articles/http-basics HTTP/1.1
Host: www.articles.com
Connection: keep-alive
Cache-Control: no-cache
Pragma: no-cache
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
 
```

##  HTTP Request Verbs
1. GET : fetch a resource from the server. - the URL should carry all the required pieces of information for the server to spot the right resource
2. POST : create a new resource.
3. PUT : update an existing resource
4. DELETE : deleting an existing resource
CRUD

### HTTP Headers
this gives information to the server about the sender.
i.e 
1. the way client wants to interact
2. the message

A bunch of general headers are shared by both the request and response messages:

Cache-Control: a directive that controls how caching happens in CDNs, proxies, or browsers. It became effective from HTTP/1.1.
Connection: used to decide if the network connection needs to be closed or open once a request is completed. Possible values are keep-alive or closed.
Pragma is an interesting and heavily implementation-specific header. It is provided only for backwards compatibility with HTTP/1.0, which does not support Cache-Control.
Trailer: tells the server it can append metadata to the message body, for example an integrity check or digital signature.
Transfer-encoding: defines the encoding of the payload transferred from the server. Often, this is known as the hop-by-hop header because the encoding is applied between nodes, and not between the server and client.
Via is used in the header to track messages and the capabilities of the client or server.
Upgrade is available only in HTTP/1.1 and above. If the client or server is allowed to shift from one protocol to another, this header has to be set. For example: Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11.
Here are some of the headers that are specific to the request:

Accept- prefixed headers indicate the acceptable media-types, encoding, languages, and character sets on the client.
From, Host, Referer, and User-Agent have details about the client that initiated the request.
Authorization: used by the client to provide credentials which can be further used by the server to authenticate the request. This is useful for accessing password-protected resources.  
If- prefixed headers are used to make a request conditional—the server returns the resource only if the condition matches. Otherwise, it returns a 304 Not Modified. 
Referrer: contains either the partial or absolute address of the requesting page.

## HTTP RESPONSE
The response is similar in structure to a request message, except for the status line and headers.

status line: it indicates whether the request succeeded(200) or why the request failed.it also includes the HTTP version and a brief description of the status.
headers: additional information about the response.
body: it's optional 

## http response headers
Just like in a request, the response message can have a number of headers. Here are some commonly used response headers:

Age: the time in seconds since the message was generated on the server.
ETag: the MD5 hash of the entity, used to check for modifications.
Location: used when sending a redirection and contains the new URL.
Server: identifies the server generating the message.
The HTTP response can also have a collection of entity headers. The role of the entity header is to offer meta-information about the message body. Here are some typical entity headers: 

Allow: defines the set of methods a resource may support. If the resource is not supported, you will receive a status code 405 Method Not Allowed.
Content- prefixed headers indicate the response media-types, encoding, languages, and character sets on the message payload. For instance, Content-Encoding is used to compress the transmitted data. 
Expires: indicates the date and time when the response will become invalid, so the resource should not be cached past that point.
Last-Modified: carries details of when the server believes that the response resource was last modified. 

## STATUS CODE
#### 1X Information Messages
A 1xx Informational status code means that the server has received the request and is continuing the process. A 1xx status code is purely temporary and is given while the request processing continues.

## 2X success
A 2xx Succesful status code means that the request was successful and the browser has received the expected information. 
200 : ok  - the request was processed successfully, and the response body will contain any requested content.
202 accepted : the request was accepted but may not include the resource in the response. This is useful for async processing on the server side. The server may choose to send information for monitoring.
204 no content : there's no message body in the response.
205 Reset content : indicates to the client to reset its document view.
206 Partial content :  indicates that the response only contains partial content. Additional headers indicate the exact range and content expiration information.
## 3XX Redirection
This requires the client to take additional action. The most common use-case is to jump to a different URL in order to fetch the resource.
301 Moved Permanetly - the resource is now located at new URL
303 See Other -  the resource is temporarily located at a new URL
304 Not Modified - the server has determined that the resource has not changed and the client should use its cached copy. This relies on the fact that the client is sending ETag (entity tag) information that is a hash of the content. The server compares this with its own computed ETag to check for modifications.

## 4xx client error
These codes are used when the server thinks that the client is at fault, either by requesting an invalid resource or making a bad request.
1. 404 Bad request - your request was malformed
2. 401 Unauthorized - request requires authentication
3. 403 Forbidden - server has denied access to the resources
4. 405 Method Not Allowed : invalid HTTP verb in the request line.or the server does not support that verb.
5. 409 Conflict: the server could not complete the request because the client is trying to modify a resource that is newer than the client's timestamp. Conflicts arise mostly for PUT requests during collaborative edits on a resource.

## 5xx Server Error
500 internal Server Error - the server has some sort of crash or internal error that stopped it from fulfilling the request.
501 not implemented : The server doesn't yet support the requested functionality
503 Service unavailable : this could happen if an internal system on the server has failed or the server is overloaded. Typically, the server won't even respond and the request will time out.