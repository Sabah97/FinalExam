const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Form = mongoose.model("Form");

// router.post("/home", (req, res) => {
//   Form(req.body).save((e, data) => {
//     if (e) {
//       throw e;
//     }
//     res.json(data);
//   });
// });
router.get("/form/:param", (req, res) => {
  console.log(JSON.parse(req.params.param));
  var form = Form(JSON.parse(req.params.param)).save((e, data) => {
    if (e) {
      throw e;
    }
    var id = data._id;
    console.log(id);

    var name = Form.find({ _id: id }, (e, data) => {
      if (e) {
        throw e;
      }
      console.log(data);
      res.render("form", {
        name: data[0].name,
        email: data[0].email,
        age: data[0].age
      });
    });
  });
});
module.exports = router;
