const mongoose = require("mongoose");
const Form = mongoose.model("Form", {
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
module.exports = Form;
