import { useEffect, useState } from "react";
import PopularBookItem from "./PopularBookItem";

export default function PopularBookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://api.itbook.store/1.0/search/mongodb"
        );
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        const data = await response.json();
        setBooks(data.books);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p className="loading">Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="books">
      {books.map((book) => (
        <PopularBookItem
          key={book.isbn13}
          id={book.isbn13}
          bookUrl={book.url}
          imageUrl={book.image}
          title={book.title}
          price={book.price}
        />
      ))}
    </div>
  );
}
