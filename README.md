# Eticket

Typescript | React | MongoDB | Kubernetes | Docker | NPM | NATS Streaming Server

A platform that enables selling and buying of Digital Tickets.

## Underlying Services

### Authentication

Users can authenticate themselves with features such as <b>Signin, Signup, Signout</b> etc.
The Authentication service works with <b>JWT (JSON Web Token) used inside Cookies</b> in order to validate the respective sessions.

### Tickets

Users can <b>Create, Update, List and Get</b> respective tickets.
The Tickets service have some endponts i.e Create, Update which ensures the current user to be authenticated.
