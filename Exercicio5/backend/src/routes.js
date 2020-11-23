const express = require('express');
const UsersController = require('./controllers/UsersControllers');
const FriendsController = require('./controllers/FriendsController');
const SessionController = require('./controllers/SessionController');
const UpdateController = require('./controllers/UpdateController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);

routes.get('/friends', FriendsController.listFriends);
routes.post('/friends', FriendsController.create);
routes.delete('friends/:username2', FriendsController.delete);

routes.post('/update', UpdateController.update);

module.exports = routes;