const connection = require('../database/connection');

module.exports = {
	async create(request, response) {
		const { username, password } = request.body;

		const user = await connection('users').where('username', username).select('*').first();

		if (!user) {
			return response.status(400).json({ error: 'User not registred' });
		}
		if (user.password != password) {
			return response.status(401).json({ error: 'Wrong Password' });
		}

		const id = user.id;
		const count = user.count;
		const autoclicker = user.autoclicker;
		const eficiency = user.eficiency;
		const luck = user.luck;

		return response.json({ id, username, count, autoclicker, eficiency, luck });
	}
}