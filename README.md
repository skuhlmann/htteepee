## htteepee

Simple node.js api mocker to use during front end development. Provides some basic restful http endpoints and crud.

----

Start server:  `npm start`

Fires up on port 3000.

Endpoints:
- GET all things: `http://localhost:3000/things`
- GET one thing: `http://localhost:3000/thing/18`
- POST thing: `http://localhost:3000/things`
  - requires a body, ie. `{name: 'Churro'}`
- PUT thing: `http://localhost:3000/thing/18`
  - requires a body, ie. `{name: 'Cronut'}`
- DELETE thing: `http://localhost:3000/thing/18`

Edit the data to your liking at `data/data.js`





