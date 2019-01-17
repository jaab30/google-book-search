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
        books: []
    };

    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    loadBooks = event => {
       
        event.preventDefault();
        
        API.search(this.state.search)
            .then(res =>
                this.setState({ books: res.data.items })
            )
            .catch(err => console.log(err));
    };


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
                        return (
                            <ResultsListItem
                                key={i}
                                title={book.volumeInfo.title}
                                subtitle={book.volumeInfo.subtitle}
                                authors={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                link={book.volumeInfo.previewLink}
                            />
                        );
                    })}
                </ResultsList>
            </div>




        )






    }

}

// function SearchBooks() {
//     return(
//         <div>
//             <h1>test</h1>
//         </div>

//     )
// }

export default SearchBooks;