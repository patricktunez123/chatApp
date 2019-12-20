# chatApp
chatApp is a chat application that will allow people to communicate in real-time using their browsers. The application is compatible with all major web browsers available.
------------------------------------------------------------------------------

## User Interface (UI)
- React

## Used Tools
---

### Server Environment
*NodeJS* (run time Environment for running JS codes)

### Framework
*Express* (for building Server)

---

### Deployment
- Heroku (For backend)
- Netlify (For frontend)

---

## Getting Started
These instructions will get you a copy of this project up and running on your local machine for development and testing purposes.

## Prerequisites
To install the software on your local machine, you need first to clone the repository ```https://github.com/patricktunez123/chatApp.git``` or download the zip file and once this is set up you are going to need this packages. [NodeJS]

```
 [Node Package Installer - NPM] this usually comes with Node or YARN in case NPM doesn't work.
```

## Installing
The installation of this application is fairly straightforward, After cloning this repository to your local machine, cd into the package folder then cd into server folder using your terminal and run the following comand

- npm install

Then cd back into the package folder then cd into chatroom folder using your terminal and run the following comand

- npm install

It will install the node_modules which will help you run this project on your local machine.

## Add invironment variables

Create a file called .env in server directory and then in that file type PORT=YOUR_FAVORITE_PORT where YOUR_FAVORITE_PORT is equal to any port number you prefer and save it.

## Run the server
cd into server folder then run the following comand

- npm run devStart

## Run the frontend
Go in chatroom folder, src, components, chatting, then Chat.js and then change const url = 'https://chatapp2020.herokuapp.com/' to const url = 'localhost:YOUR_PORT' where YOUR_PORT is the port that you have set in .env file

cd into chatroom folder then run the following comand

- npm start

---

## Author
- Tunezerwane Patrick <tunezepatrick@gmail.com>

---

## License & copyright
Copyright (c) Tunezerwane Patrick