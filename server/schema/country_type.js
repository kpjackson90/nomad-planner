const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const PassportAccessType = require("./passport_access_type");
const Country = mongoose.model("country");

const CountryType = new GraphQLObjectType({
  name: "CountryType",
  fields: () => ({
    id: { type: GraphQLID },
    country_name: { type: GraphQLString },
    passport_access: {
      type: new GraphQLList(PassportAccessType),
      resolve(parentValue) {
        return Country.findPassportAccess(parentValue.id);
      }
    }
  })
});

module.exports = CountryType;
