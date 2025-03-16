import { Link } from "react-router-dom";

export default function FavoriteBookItem({ id, imageUrl, title, price }) {
  // Проверяем, есть ли id, иначе не рендерим ссылку
  if (!id) {
    return <p className="error">Ошибка: отсутствует ID книги</p>;
  }

  return (
    <div className="books">
      <Link to={`/book/${String(id)}`} className="books-item">
        {" "}
        {/* Преобразуем id в строку */}
        <div className="books-img">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="books-info">
          <h6 className="books-title">{title}</h6>
          <span className="books-price">{price}</span>
        </div>
      </Link>
    </div>
  );
}
