exports.up = function (knex) {
  return knex.schema.table("cars", (tbl) => {
    tbl.text("transmissionType");
    //test
    tbl.text("status");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
