

const connection = require('../database/connection');


module.exports = {
	async index(request, response) {
		const friends = await connection('friends').select('*');

		return response.json(friends);
	},

	async listFriends(request, response) {
		const userid = request.headers.authorization;

		const friends = await connection('friends').where('id1', userid).select('*');
		return response.json(friends);
	},

	async create(request, response) {
		const { username2 } = request.body;
		const id1 = request.headers.authorization;
		var username1 = await connection('users').where('id', id1).select('username').first();
		username1 = username1.username;
		var id2 = await connection('users').where('username', username2).select('id').first();
		id2 = id2.id;

		const [id] = await connection('friends').insert({ id1, username1, id2, username2 });

		return response.json({ id });
	},

	async delete(request, response) {
		const { username2 } = request.params;
		const { userid } = request.headers.authorization;

		const friend = await connection('friends').where('id1', userid).andWhere('username2', username2).delete();

		return response.status(204).send();
	}
}