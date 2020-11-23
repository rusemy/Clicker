const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
	async index(request, response) {
		const users = await connection('users').select('*');

		return response.json(users);
	},

	async create(request, response) {
		const { username, password } = request.body;
		const id = crypto.randomBytes(4).toString('HEX');
		const count = 0;
		const autoclicker = 0;
		const eficiency = 1;
		const luck = 1;

		const usercheck = await connection('users').where('username', username).select('*').first();

		if (!usercheck) {
			await connection('users').insert({ id, username, password, count, autoclicker, eficiency, luck });
		} else {
			return response.status(400).json({ error: 'Username in use' });
		}

		console.log(id, username, password, count, autoclicker, eficiency, luck)

		return response.json({ username });
	}
};