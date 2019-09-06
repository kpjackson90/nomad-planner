const mongoose = require("mongoose");
const { Schema } = mongoose;

const PassportAccessSchema = new Schema({
  country: {
    type: String,
    required: true
  },
  visa_required: {
    type: Boolean,
    required: true
  },
  allowed_stay: {
    type: Number,
    required: true
  },
  type_of_visa: {
    type: String,
    require: true
  }
});

mongoose.model("passport_access", PassportAccessSchema);
