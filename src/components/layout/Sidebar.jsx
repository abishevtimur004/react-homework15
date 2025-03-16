import { Link } from "react-router-dom";
import { LuBook } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";


export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Панель управление</h2>
      <Link to="/" className="sidebar-link">
        <FaHome /> Главная
      </Link>
      <Link to="/favorite" className="sidebar-link">
        {<LuBook />} Избранные книги
      </Link>
      <Link to="/popular" className="sidebar-link">
        {<LuBook />} Популярные книги
      </Link>
      <Link to="/settings" className="sidebar-link">
      <IoSettingsOutline /> Настройка
      </Link>
    </aside>
  );
}
