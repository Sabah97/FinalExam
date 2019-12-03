const mongoose = require("mongoose");
const form = mongoose.model("Form", {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  }
});
module.exports = form;
