const express = require("express");
const expressGraphQL = require("express-graphql");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose.Promise = global.Promise;
mongoose.connect(keys.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection
  .once("open", () => console.log("Connected to MongoLab instance."))
  .on("error", error => console.log("Error connecting to MongoLab:", error));

const app = express();

app.use(bodyParser.json());

app.use(
  "/graphql",
  expressGraphQL({
    //schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Nomad Planner listening on port " + 4000);
});
