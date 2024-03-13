import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import PostItem from "./PostItem/PostItem";
import PostList from "./PostList/PostList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="posts" element={<PostList />} />
          <Route path="/:id" element={<PostItem />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
