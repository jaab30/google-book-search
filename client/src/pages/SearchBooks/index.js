import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Form from "../../components/Form";
import ResultsListItem from "../../components/ResultsListItem";
import ResultsList from "../../components/ResultsList";
import API from "../../utils/API";
import "./style.css"


class SearchBooks extends Component {

    state = {
        search: "",
        books: [],
        imageLink: "https://redhillcutlery.com/wp-content/uploads/2015/09/camera-no-image-1.jpg"
    };

    handleInputChange = event => {

        const value = event.target.value;

        this.setState({
            search: value,
            message: ""
        });
    };

    loadBooks = event => {
        event.preventDefault();
        if (this.state.search === "") {
            this.setState({ message: "Please enter a Book Title" })
        } else {
            API.search(this.state.search)
                .then(res => {
                    this.setState({
                        books: res.data.items,
                        search: "",
                    })
                })
                .then(res => {
                    API.getBooks()
                        .then(res => {
                            for (let i = 0; i < res.data.length; i++) {
                                let title = res.data[i].title
                                for (let j = 0; j < this.state.books.length; j++) {
                                    if (title === this.state.books[j].volumeInfo.title) {
                                        let newBookArray = [...this.state.books]
                                        newBookArray.splice([j], 1)
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
                this.setState({ books: newBookArray })
            })
            .catch(err => console.log(err));
    }

    render() {

        return (
            <div>
                <Jumbotron
                    title={"Google Books Search"}
                    subTitle={"Search for and Save Books of interest"}>
                </Jumbotron>
                <Form
                    query={this.state.search}
                    handleInputChange={this.handleInputChange}
                    loadBooks={this.loadBooks}
                    message={this.state.message}
                >
                </Form>
                <ResultsList>
                    {this.state.books.map((book, i) => {
                        if (book.volumeInfo.imageLinks === undefined) {
                            return (
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