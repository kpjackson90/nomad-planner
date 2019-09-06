if (process.env.NODE === "production") {
  module.export = require("./prod");
} else {
  module.export = require("./dev");
}
