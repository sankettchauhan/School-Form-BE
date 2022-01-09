const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  mobileNo: {
    type: String,
    required: true,
    min: 10,
    max: 10,
    unique: true,
  },
  device: {
    type: String,
    required: true,
    enum: ["PC/Laptop", "Mobile"],
  },
  class: {
    type: String,
    required: true,
    enum: ["KG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  },
  subjects: {
    type: [String],
    required: true,
    enum: ["English", "Maths", "Physics", "Chemistry", "Computer Science"],
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  preferredLanguage: {
    type: String,
    required: true,
    enum: ["Hindi", "English"],
  },
});

const Form = mongoose.model("Form", formSchema);

// function validateForm(name) {
//   const schema = Joi.object({
//     name: Joi.string().required().min(3).max(30),
//   });
//   return schema.validate({ name });
// }

module.exports = { formSchema, Form };
