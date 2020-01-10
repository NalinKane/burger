const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  devour: function(cols, vals, cb) {
    orm.create("burger", cols, vals, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
