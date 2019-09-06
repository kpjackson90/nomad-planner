const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLID
} = graphql;
const mongoose = require("mongoose");
const Country = mongoose.model("country");
const CountryType = require("./country_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCountry: {
      type: CountryType,
      args: {
        country_name: { type: GraphQLString }
      },
      resolve(parentValue, { country_name }) {
        return new Country({ country_name }).save();
      }
    },
    addPassportAccessToCountry: {
      type: CountryType,
      args: {
        country: { type: GraphQLString },
        visa_required: { type: GraphQLBoolean },
        allowed_stay: { type: GraphQLInt },
        type_of_visa: { type: GraphQLString }
      },
      resolve(
        parentValue,
        { country, visa_required, allowed_stay, type_of_visa }
      ) {
        return Country.addPassportAccess(
          country,
          visa_required,
          allowed_stay,
          type_of_visa
        );
      }
    },
    deleteCountry: {
      type: CountryType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Country.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
