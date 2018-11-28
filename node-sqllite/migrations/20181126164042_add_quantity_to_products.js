
exports.up = function(knex, Promise) {
    return knex.schema.table('products', function(t) {
        t.integer('quantity').notNull().defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('products', function(t) {
        t.dropColumn('quantity');
    });
};
