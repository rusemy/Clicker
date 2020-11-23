const connection = require('../database/connection');

module.exports = {

	async update(request, response) {
		const id = request.headers.authorization;
		const { counter, autoClickersAmount, efficiencyLevel, luckLevel } = request.body;

		const user = await connection('users').where('id', id).update({
			count: counter,
			autoclicker: autoClickersAmount,
			eficiency: efficiencyLevel,
			luck: luckLevel,
		});
		console.log('upadatebavk');
		return response.json({ user });
	}
};