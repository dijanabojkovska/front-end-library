import logo from '../../logo.svg';
import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route, Routes} from "react-router-dom";
import Books from '../Books/books';
import Categories from '../Categories/categories'
import LibraryService from "../../repository/eShopRepository";
import BookAdd from "../Books/BookAdd/BookAdd";
import Authors from "../Authors/Authors";
import BookEdit from "../Books/BookEdit/BookEdit";
import BookTerm from "../Books/BookTerm/BookTerm";

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: [],
            categories:[],
            selectedBook: {}
        }
    }

    render(){
        return(
            <Router>
                <main>
                    <div className={"container"}>
                        <Routes>
                            <Route path={"/"} element={<Books books = {this.state.books} onEdit={this.getBook} onDelete={this.deleteBook} onMarkAsTaken={this.markAsTaken}/>}/>
                            <Route path={"/authors"} element={<Authors authors={this.state.authors}/>}/>
                            <Route path={"/api/add"} element = {<BookAdd onAddBook={this.addBook} authors={this.state.authors}/>}/>
                            <Route path={"/api/edit/:id"} element = {<BookEdit onEditBook={this.editBook}  term={this.state.selectedBook} authors={this.state.authors}/>}/>
                            <Route path={"/api/markAsTaken/:id"} element = {<Books onMarkAsTaken={this.markAsTaken} term={this.state.selectedBook} authors={this.state.authors}/>}/>
                            <Route path={"/api/delete/:id"} element = {<Books onDelete={this.deleteBook} term={this.state.selectedBook} authors={this.state.authors}/>}/>
                            <Route path={"/categories"} element={<Categories categories = {this.state.categories}/>}/>

                        </Routes>
                    </div>
                </main>
            </Router>
            )
    }

    loadBooks=()=>{
        LibraryService.fetchBooks()
            .then((data)=>{
                this.setState({
                    books: data.data
                })
            })
    }

    loadCategories=()=>{
        LibraryService.fetchCategories()
            .then((data)=>{
                console.log(data)
                this.setState({
                    categories: data.data
                })
            })
            .catch(e=>console.log(e));
    }

    loadAuthors=()=>{
        LibraryService.fetchAuthors()
            .then((data)=>{
                this.setState({
                    authors: data.data
                })
            })
    }

    getBook = (id) => {
        LibraryService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    addBook = (name, category, author, availableCopies) => {
        LibraryService.addBook(name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            })
            .catch((e) => console.log(e));
    }

    editBook = (id, name, category, author, availableCopies) => {
        LibraryService.editBook(id, name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            })
            .catch((e) => console.log(e));
    }

    deleteBook = (id) => {
        LibraryService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    markAsTaken = (id) => {
        LibraryService.markAsTaken(id)
            .then(() => {
                this.loadBooks();
            });
    }



    componentDidMount() {
        this.fetchData();
        this.forceUpdate();
    }

    fetchData = () => {
        this.loadAuthors();
        this.loadCategories();
        this.loadBooks();
    }

}

export default App;
