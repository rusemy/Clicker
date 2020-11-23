
exports.up = function (knex) {
	return knex.schema.createTable('friends', function (table) {
		table.increments('id').primary();

		table.string('id1').notNullable();
		table.string('username1').notNullable();

		table.string('id2').notNullable();
		table.string('username2').notNullable();

		table.foreign('id1').references('id').inTable('users');
		table.foreign('username1').references('username').inTable('users');
		table.foreign('id2').references('id').inTable('users');
		table.foreign('username2').references('username').inTable('users');

	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('friends');
};
