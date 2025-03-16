import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

export default function Layout(props) {
  return (
    <>
      <Header />
      <Sidebar/>
      <div className="container">
        <div className="content">{props.children}</div>
      </div>
    </>
  );
}
