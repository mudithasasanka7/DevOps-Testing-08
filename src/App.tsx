import { useState, useEffect } from "react";

export interface Post {
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ color: "#2c3e50" }}>Muditha Sasanka</h1>
      <p><strong>Address:</strong> No:88, Guruwala, Dompe.</p>
      <p><strong>Email:</strong> muditha@gmail.com</p>
      <p><strong>Phone:</strong> +9411 1234567</p>

      <h2 style={{ marginTop: "30px", color: "#34495e" }}>Experience / Projects</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "15px" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
