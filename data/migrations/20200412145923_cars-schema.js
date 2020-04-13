exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.text("VIN", 17).unique().notNullable();
    tbl.text("make").notNullable();
    tbl.text("model").notNullable();
    tbl.text("mileage").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
