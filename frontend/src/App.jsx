import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ArticleDetails from "./pages/ArticleDetails";
import { Layout } from "./pages/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/blog/:id" element={<ArticleDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
