import axios from "axios";

export default {
    // gets all books from db
    getBooks: () => {
        return axios.get("/api/books");
    },
    // gets specific book with id from db
    getBook: (id) => {
        return axios.get("/api/books/" + id);
    },
    // deletes specific book from db
    deleteBook: (id) => {
        return axios.delete("/api/books/" + id);
    },
    // post book to db
    saveBook: (data) => {
        return axios.post("/api/books/" + data)
    }
}