const mongoose = require("mongoose");

function main() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database connected succefully");
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = main;
