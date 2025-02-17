export default function FavoriteBookItem({ bookUrl, imageUrl, title, price }) {
  return (
    <div className="books">
      <a href={bookUrl} target="_blank" className="books-item">
        <div className="books-img">
          <img src={imageUrl} alt="{title}" />
        </div>
        <div className="books-info">
          <h6 className="books-title">{title}</h6>
          <span className="books-price">{price}</span>
        </div>
      </a>
    </div>
  );
}
