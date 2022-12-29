import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App () {
  const [books, setBooks] = useState([]);

  const generateId = () =>
  {
    return Math.round(Math.random() * 10000);
  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {id: generateId(), title},
    ];

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    });
    
    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, title: newTitle};
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <div><BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/></div>
      <div><BookCreate onCreate={createBook}/></div>
    </div>
  );
}

export default App;