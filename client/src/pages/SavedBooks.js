import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import ResultsListItem from "../components/ResultsListItem";
import ResultsList from "../components/ResultsList";
import API from "../utils/API";
import { Link } from "react-router-dom";



class SavedBooks extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.showSavedBooks();
    }
    showSavedBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
      .then(res => this.showSavedBooks())
      .catch(err => console.log(err));
    }


    render() {

        return (
            <div>
                <div></div>
                {this.state.books.map((book, i) => {
                    return (
                        <div>
                            <div className="imgDiv">
                                <img alt={book.title} src={book.image} />
                            </div>
                            <h2 className={book._id}>Title: {book.title}</h2>
                            <h3>{book.subtitle}</h3>
                            <p>Written by: {book.authors}</p>
                            <p>Description: {book.description}</p>
                            <Link to={`//${book.link.substring(7)}`} target="_blank">
                                <button>view</button></Link>
                                <button onClick={() => this.deleteBook(book._id)}>Delete</button>
                        </div>
                    );
                })}


            </div>




        )
    }
}

export default SavedBooks