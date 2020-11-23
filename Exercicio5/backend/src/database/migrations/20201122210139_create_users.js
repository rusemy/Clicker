
exports.up = function (knex) {
	return knex.schema.createTable('users', function (table) {
		table.string('id').primary();
		table.string('username').notNullable();
		table.string('password').notNullable();
		table.integer('count').notNullable();
		table.integer('autoclicker').notNullable();
		table.integer('eficiency').notNullable();
		table.integer('luck').notNullable();

	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('users')
};
