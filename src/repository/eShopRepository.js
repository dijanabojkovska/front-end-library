import axios from '../custom-axios/axios';

const LibraryService = {
    fetchBooks: () => {
        return axios.get("/books");
    },

    fetchAuthors: () => {
        return axios.get("/authors");
    },

    fetchCategories: () => {
        return axios.get("/categories");
    },

    addBook: (name, category, author, availableCopies) => {
        return axios.post("/add", {
            "name": name,
            "category": category,
            "author": author,
            "availableCopies": availableCopies
        }, {withCredentials:false});
    },

    editBook: (id, name, category, author, availableCopies) => {
        return axios.post("/edit", {
            "id": id,
            "name": name,
            "category": category,
            "author": author,
            "availableCopies": availableCopies
        }, {withCredentials:false});
    },

    deleteBook: (id) => {
        return axios.post(`/delete/${id}`);
    },

    markAsTaken: (id) => {
        return axios.post(`/markAsTaken/${id}`);
    },

    getBook: (id) => {
        return axios.get(`/${id}`);
    }
}

export default LibraryService;