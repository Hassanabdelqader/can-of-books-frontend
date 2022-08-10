import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';   
import axios from 'axios';
import Carousel from './Components/Carousel';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
    const count = 0;
    
  }

  getBooks = async () => {
    const res = await axios.get('https://bookshasan.herokuapp.com/book');
    this.setState({ books: res.data });
    console.log(this.state.books);
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  componentDidMount() {
    console.log("inside the componentDidMount");
   this.getBooks();
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel data={this.state.books}/>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
