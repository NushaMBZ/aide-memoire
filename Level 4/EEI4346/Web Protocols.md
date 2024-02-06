---
dg-publish: true
---

- A protocol is simply a standard for enabling the connection, communication and data transfer between two places on a network


**HTTP**

- stands for Hyper Text Transfer Protocol 
- protocol for transferring web pages across the internet
- web browser to use HTTP to transfer the data
- An application level protocol for distributed, collaborative, hypermedia information systems

![[Pasted image 20231015011611.png]]


***Anatomy of an HTTP request***

- GET - retrieve resource
- HEAD - retrieve only headers 
- POST - create resource 

***Anatomy of an HTTP response***

First line is always protocol and statue code

- 1xx - information only
- 2xx - success 
- 3xx - client redirect
- 4xx - client error
- 5xx - server error 

***Status Code***

- 200 OK - request succeeded, resulting resources will be included in message body
- 404 Not Found - requested resource does not exist 
- 500 Server Error - Error on the server side in processing request


***HTTP Methods***

- GET
- POST
- PUT
- HEAD
- DELETE
- PATCH
- OPTIONS


GET
	- Used to request data from a specific resource
	- Can be cached 
	- Remain in the browser history
	- Can be bookmarked
	- Have length restrictions
	- Only used to request data

POST
	- Used to send data to a server to create/ update a resource
	- Never cached
	- Don't remain in the browser history
	- Can't bookmarked
	- Have no restriction on data length 


**HTTPS**

- stands for Hyper Text Transfer Protocol Secure
- Secure Version of HTTP
- Primary protocol used to send data between a web browser and a website
- Encrypted in order to increase the security of data transfer


***How Does HTTPS works***

- HTTPS uses an encryption protocol to encrypt communications
- The protocol is called Transport Layer Security (TLS)
- This protocol secures communications by using known as an asymmetric public key infrastructure
- This type of security system uses two different keys to encrypt communications between two parties
	-The private Key
	-The public Key

