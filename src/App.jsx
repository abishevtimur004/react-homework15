import AppRouter from "./components/core/AppRouter";
import Layout from "./components/core/Layout";
import "./assets/style.css";

export default function App() {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}
