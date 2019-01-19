import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import ResultsListItem from "../components/ResultsListItem";
import ResultsList from "../components/ResultsList";
import API from "../utils/API";
import { Link } from "react-router-dom";


class SearchBooks extends Component {

    state = {
        search: "",
        books: [],
        imageLink: "https://redhillcutlery.com/wp-content/uploads/2015/09/camera-no-image-1.jpg"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    loadBooks = event => {
        event.preventDefault();
        if (this.state.search === "") {
            alert("Please andter a Book Title")
        } else {
            API.search(this.state.search)
                .then(res => {
                    this.setState({ books: res.data.items, search: "", })
                }
                )

                .then(res => {
                    API.getBooks()
                        .then(res => {
                            for (let i = 0; i < res.data.length; i++) {
                                let title = res.data[i].title
                                for (let j = 0; j < this.state.books.length; j++) {
                                    console.log(this.state.books)
                                    if (title == this.state.books[j].volumeInfo.title) {
                                        let newBookArray = [...this.state.books]
                                        newBookArray.splice([j], 1)
                                        console.log(newBookArray)
                                        this.setState({ books: newBookArray })
                                    }
                                }
                            }
                        })
                })
                .catch(err => console.log(err));
        }
    }


    saveBook = (id) => {
        API.saveBook({
            title: this.state.books[id].volumeInfo.title,
            subtitle: this.state.books[id].volumeInfo.subtitle,
            authors: this.state.books[id].volumeInfo.authors,
            description: this.state.books[id].volumeInfo.description,
            image: this.state.books[id].volumeInfo.imageLinks.thumbnail,
            link: this.state.books[id].volumeInfo.previewLink
        })
            .then(res => {
                let newBookArray = [...this.state.books]
                newBookArray.splice([id], 1)
                console.log(newBookArray)
                this.setState({ books: newBookArray })
            })
            .catch(err => console.log(err));
    }

    render() {

        return (
            <div>
                <Jumbotron></Jumbotron>
                <Form
                    query={this.state.search}
                    handleInputChange={this.handleInputChange}
                    loadBooks={this.loadBooks}
                >
                </Form>
                <ResultsList>
                    {this.state.books.map((book, i) => {
                        if (book.volumeInfo.imageLinks === undefined) {
                            console.log("yes")
                            return (
                                console.log(book.volumeInfo.imageLinks),
                                <ResultsListItem
                                    key={i}
                                    bookId={i}
                                    title={book.volumeInfo.title}
                                    subtitle={book.volumeInfo.subtitle}
                                    authors={book.volumeInfo.authors}
                                    description={book.volumeInfo.description}
                                    image={this.state.imageLink}
                                    link={book.volumeInfo.previewLink}
                                    saveBook={this.saveBook}
                                    onMyListText={this.state.onMyListText}
                                />
                            )

                        } else {
                            return (
                                console.log(book.volumeInfo.imageLinks),
                                <ResultsListItem
                                    key={i}
                                    bookId={i}
                                    title={book.volumeInfo.title}
                                    subtitle={book.volumeInfo.subtitle}
                                    authors={book.volumeInfo.authors}
                                    description={book.volumeInfo.description}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    link={book.volumeInfo.previewLink}
                                    saveBook={this.saveBook}
                                    onMyListText={this.state.onMyListText}
                                />
                            );
                        }

                    })}
                </ResultsList>
            </div>
        )
    }
}

export default SearchBooks;