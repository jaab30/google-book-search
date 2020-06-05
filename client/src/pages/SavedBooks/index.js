import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import ResultsList from "../../components/ResultsList";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./style.css"

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
                <Jumbotron
                    title={"Google Books Search"}
                    subTitle={"Books Wish List"}>
                </Jumbotron>
                {this.state.books.map((book, i) => {
                    return (
                        <ResultsList
                        key={i}
                        >
                            <div className="savedItemDiv">
                                <div className="imgDivSaved">
                                    <img alt={book.title} src={book.image} />
                                </div>
                                <h2 className={book._id}>Title: {book.title}</h2>
                                <h3 className="subTitleSaved">{book.subtitle}</h3>
                                <p className="authorSaved">Written by: {book.authors}</p>
                                <p className="descriptionSaved">{book.description}</p>
                                <Link to={`//${book.link.substring(7)}`} target="_blank">
                                    <button className="viewBtnSaved">view</button></Link>
                                <button className="deleteBtnSaved" onClick={() => this.deleteBook(book._id)}>Delete</button>
                            </div>
                        </ResultsList>
                    );
                })}
            </div>
        )
    }
}

export default SavedBooks