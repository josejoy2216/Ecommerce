// useFetchBooks.js
import { useEffect, useState } from 'react';

const useFetchBooks = (category) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'http://localhost:5000/all-book';
                if (category === 'Top Book') {
                    let url = 'http://localhost:5000/all-book';
                }else{
                    url = `http://localhost:5000/filter-book/${category}`;
                }

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    return { books, loading, error };
};

export default useFetchBooks;
