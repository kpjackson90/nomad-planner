const mongoose = require("mongoose");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean
} = graphql;
const PassportAccess = mongoose.model("passport_access");

const CountryType = new GraphQLObjectType({
  name: "PassportAccessType",
  fields: () => ({
    id: { type: GraphQLID },
    country: { type: GraphQLString },
    visa_required: { type: GraphQLBoolean },
    allowed_stay: { type: GraphQLInt },
    type_of_visa: { type: GraphQLString },
    country: {
      type: require("./country_type"),
      resolve(parentValue) {
        return PassportAccess.findById(parentValue)
          .populate("country")
          .then(passport_access => {
            return passport_access.country;
          });
      }
    }
  })
});

module.exports = CountryType;
