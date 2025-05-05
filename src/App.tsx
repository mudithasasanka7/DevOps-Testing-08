import { useState, useEffect } from "react";

export interface Post {
  id: number;
  title: String;
  body: String;
}
function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((responce) => responce.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <h1>Muditha Sasanka Kodikara</h1>
      <h1>No:88, Guruwala, Dompe.</h1>
    
    </>
  );
}

export default App;
