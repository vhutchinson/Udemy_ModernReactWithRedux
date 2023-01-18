import { useState} from 'react';
import useBooksContext from '../hooks/useBooksContext';

function BookCreate () {
    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    };

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleFormSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button"  >Submit</button>
            </form>
        </div>
    );
}

export default BookCreate;