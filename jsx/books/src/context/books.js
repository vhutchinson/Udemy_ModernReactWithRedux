import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider ({ children }) {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");

        setBooks(response.data);
    };

    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
          title: title
        });
    
        const updatedBooks = [
          ...books,
          response.data,
        ];
    
        setBooks(updatedBooks);
    };
    
    const deleteBookById = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);

        if (response.status === 200) {
            const updatedBooks = books.filter((book) => {
            return book.id !== id
            });
            
            setBooks(updatedBooks);
        }
    };
    
    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
            return {...book, ...response.data};
            }

            return book;
        });

        setBooks(updatedBooks);
    };

    const providerValue = {
        books,
        getBooks,
        createBook,
        editBookById,
        deleteBookById,
    };

    return <BooksContext.Provider value={providerValue}>{children}</BooksContext.Provider>
}

export { Provider };
export default BooksContext;