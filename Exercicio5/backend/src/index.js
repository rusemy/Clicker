const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//app.get('/', (request, response) => { return response.send('hi') })

app.post('/', (request, response) => { return response.send('hi') })

app.listen(3333);