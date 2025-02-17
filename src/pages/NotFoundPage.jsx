import { Link } from "react-router-dom";
import notFoundImage from "../assets/img/not-found.svg";

export default function NotFoundPage() {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="svg-container">
            <img src={notFoundImage} alt="nf-image" />
            <h1>Страница не найдено. Перейдите на <Link to="/">главную</Link></h1>
          </div>
        </div>
      </div>
    </>
  );
}
