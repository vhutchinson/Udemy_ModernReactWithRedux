import { useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBooksContext from './hooks/useBooksContext';

function App () {
  const { getBooks } = useBooksContext();

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <div><BookList /></div>
      <div><BookCreate /></div>
    </div>
  );
}

export default App;