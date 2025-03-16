import { RiBookShelfFill } from "react-icons/ri";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">{<RiBookShelfFill />}</div>
      <div className="title">Книжный мир</div>
      <div className="extra">Контакты</div>
    </header>
  );
}
