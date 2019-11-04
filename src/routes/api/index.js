const router = require("express").Router();
const routes = require("./routes");

// route: /books/routes-defined-in-'routes'
router.use("/books", routes);

// exporting to api routes
module.exports = router 