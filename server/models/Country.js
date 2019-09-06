const mongoose = require("mongoose");
const { Schema } = mongoose;

const CountrySchema = new Schema({
  country_name: {
    type: String,
    required: true
  },
  passport_access: {
    type: Schema.Types.ObjectId,
    ref: "passport_access"
  }
});

CountrySchema.statics.addPassportAccess = function(
  id,
  country,
  visa_required,
  allowed_stay,
  type_of_visa
) {
  const PassportAccess = mongoose.model("passport_access");
  return this.findById(id).then(passport => {
    const passport_access = new PassportAccess({
      country,
      visa_required,
      allowed_stay,
      type_of_visa,
      country_name
    });
    country.passport_access.push(passport_access);
    return Promise.all([passport_access.save(), country.save()]).then(
      ([passport_access, country]) => country
    );
  });
};

CountrySchema.statics.findPassportAccess = function(id) {
  return this.findById(id)
    .populate("passport_access")
    .then(country => country.passport_access);
};

mongoose.model("country", CountrySchema);
