const router = require("express").Router();
const controller = require("../../src/controller/controller");

// routes that access the db queries

// route: /api/books (all books)
router.route("/")
    // find all books in db
    .get(controller.findAll)
    // post (create) new book in db
    .post(controller.create);

// route: /api/books/:id
router.route("/api/books/:id")
    .delete(controller.delete);

// catch all route
router.route("*")
    .get(controller.findAll);

// export router in index
module.exports = router;
