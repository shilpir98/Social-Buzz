const path = require("path");
const rootPath = path.normalize(__dirname + "/..");
const DB = process.env.DB;
const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

module.exports = {
  development: {
    db: "mongodb://shilz98:1shilpikool1@ds257485.mlab.com:57485/social123",
    root: rootPath,
    app: {
      name: "Node Twitter"
    },
    github: {
      clientID: "440bdd35de0814897c1d",
      clientSecret: "df7247a4b9fab74040ec1881416d6d1c24d873b7",
      
      callbackURL: "http://socialbuzz123.herokuapp.com/auth/github/callback"
    }
  },
  test: {
    db: "mongodb://shilz98:1shilpikool1@ds257485.mlab.com:57485/social123",
    root: rootPath,
    app: {
      name: "Nodejs Express Mongoose "
    },
    github: {
      clientID: "440bdd35de0814897c1d",
      clientSecret: "df7247a4b9fab74040ec1881416d6d1c24d873b7",
      callbackURL: "http://socialbuzz123.herokuapp.com/auth/github/callback"
    }
  },
  production: {
    db: "mongodb://shilz98:1shilpikool1@ds257485.mlab.com:57485/social123",
    root: rootPath,
    app: {
      name: "Nodejs Express Mongoose Demo"
    },
    github: {
      clientID: "440bdd35de0814897c1d",
      clientSecret: "df7247a4b9fab74040ec1881416d6d1c24d873b7",
      callbackURL: "http://socialbuzz123.herokuapp.com/auth/github/callback"
    }
  }
};
