const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const CountryType = require("./country_type");
const PassportAccessType = require("./passport_access_type");
const Country = mongoose.model("country");
const PassportAccess = mongoose.model("passport_acces");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    countries: {
      type: new GraphQLList(CountryType),
      resolve() {
        return Country.find({});
      }
    },
    country: {
      type: CountryType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Country.findById(id);
      }
    },
    passport_access: {
      type: PassportAccessType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return PassportAccess.findById(id);
      }
    }
  })
});

module.exports = RootQuery;
