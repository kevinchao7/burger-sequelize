
module.exports = (sequelize, DataTypes)=>{
  const burgers = sequelize.define('burgers',{
    burger_name :
      {
        allowNull : false,
        type      : DataTypes.STRING,
        validate  :
          {
            len : { args : [1,20], msg : "Must be between 1 and 20 characters."}
          }
      },
    devoured :
      {
        type         : DataTypes.BOOLEAN,
        defaultValue : false
      }
  })
  return burgers;
}


// // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");
//
// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     orm.delete("burgers", condition, function(res) {
//       cb(res);
//     });
//   }
// };
//
// // Export the database functions for the controller (burgerController.js).
// module.exports = burger;
