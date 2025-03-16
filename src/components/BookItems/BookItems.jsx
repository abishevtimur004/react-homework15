import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `https://api.itbook.store/1.0/books/${id}`
        );
        setBook(response.data);
        console.log(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <p className="loading">Загрузка...</p>;
  if (error) return <p className="error">Ошибка: {error}</p>;

  return (
    <div className="book-details">
      <div className="book-container">
        <img src={book.image} alt={book.title} className="book-image" />
        <div className="book-info">
          <h2 className="book-title">{book.title}</h2>
          <p className="book-subtitle">{book.subtitle}</p>
          <p className="book-price">
            Цена: <strong>{book.price}</strong>
          </p>
          <a
            href={book.url}
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button"
          >
            Купить
          </a>
        </div>
      </div>
    </div>
  );
}
