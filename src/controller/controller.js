const database = require("../models");

// database controllers

// exporting for routes to access queries
module.exports = {
    // find all books
    findAll: (req, res) => {
        database.Books
            .find(req.query)
            .sort({date: -1})
            .then(databaseModel => res.json(databaseModel))
            .catch(err => res.status().json(err));
    },
    // find specific book by ID
    findById: (req, res) => {
        database.Books
            .create(req.body)
            .then(databaseModel => res.json(databaseModel))
            .catch(err => res.status().json(err));
    },
    // add book to db (create)
    create: (req, res) => {
        database.Books
            .create(req.body)
            .then(databaseModel => res.json(databaseModel))
            .catch(err => res.status().json(err));
    },
    // update existing book in db
    update: (req, res) => {
        database.Books
            .findOneAndUpdate({ _id: req.params.id}, req.body)
            .then(databaseModel => res.json(databaseModel))
            .catch(err => res.status().json(err));
    },
    // delete a book from db 
    delete: (req, res) => {
        database.Books
            .findAllById({ _id: req.params.id})
            .then(databaseModel => databaseModel.remove())
            .then(databaseModel => res.json(databaseModel))
            .catch(err => res.status().json(err));
    }
};