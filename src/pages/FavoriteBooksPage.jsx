import { useParams } from "react-router-dom";
import FavoriteBookList from "../components/FavoriteBook/FavoriteBookList";

export default function FavoriteBook() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1 className="page-title">Избранные книги</h1>
      <FavoriteBookList />
    </div>
  );
}
