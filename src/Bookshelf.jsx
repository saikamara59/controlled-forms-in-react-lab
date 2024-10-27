import { useState } from "react";
import './index.css';

const Bookshelf = () => {

const [ newBook,setNewBook] = useState({title:'',author:''});

const [books,setBooks] = useState([
    {title: 'Harry Potter and the Sorcerers Stone', author:  'J.K Rowling'},
    {title: 'Harry Potter and the Goblet of Fire', author: 'J.K Rowling'},

    
])

const handleInputChange = (event) => {
    const {name,value} = event.target;
    setNewBook((prevBook)=>({
        ...prevBook,
        [name]:value
    }));
}

const handleSubmit = (event) => {
    event.preventDefault();
    if(newBook.title && newBook.author) {
        setBooks((prevBooks)=> [...prevBooks,newBook]);
        setNewBook({title:'',author:''})
    }
}

return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
        <label>
            Title:
            <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={newBook.title}
            onChange={handleInputChange}
            />
        </label>
        <label>
            Author:
            <input
            type="text"
            name="author"
            placeholder="Author"
            value={newBook.author}
            onChange={handleInputChange}
            />
        </label>
        <button type="submit">Add Book</button>
    </form>
  </div>
  <div className="bookCardsDiv">
    {books.map((book,index)=>(
        <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>By {book.author}</p>
            </div>
    ))}
  </div>
</div>
)

}

export default Bookshelf
