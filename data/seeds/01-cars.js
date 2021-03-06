exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          VIN: "1HEIDJEMD4DJDYTDJDO",
          make: "Toyota",
          model: "Corolla",
          mileage: "25500",
          transmissionType: "Manual",
          status: "clean",
        },
        {
          id: 2,
          VIN: "1HEIDJEMD4DJDYTDJD3",
          make: "Toyota",
          model: "Corolla",
          mileage: "25600",
          transmissionType: "Automatic",
          status: "salvage",
        },
        {
          id: 3,
          VIN: "1HEIDJEMD4DJDYTDJD2",
          make: "Toyota",
          model: "Corolla",
          mileage: "25800",
          transmissionType: "Manual",
          status: "salvage",
        },
      ]);
    });
};
