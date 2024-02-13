import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Post = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) => setProducts(posts))
        .catch((error) => console.error("Error fetch data", error));
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="title">
        <h1>Posts</h1>
      </div>
      <div className="posts-container">
        {products.map((product: any) => (
          <ul key={product.id}>
            <li>
              <Link to={`/${product.id}`}>
                <h2>{product.title}</h2>{" "}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Post;
