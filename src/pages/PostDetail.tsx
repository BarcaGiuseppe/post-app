import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState<any>([]);
  const [error, setError] = useState<string | null | boolean>(null);
  const navigate = useNavigate();
  const { slug } = useParams();
  console.log(slug);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${slug}`
        );
        if (!response.ok) {
          setError(!response.ok);
        }
        const postData = await response.json();
        setProduct(postData);
      } catch (error: any) {
        setError(error);
        console.error("Error fetch data", error);
      }
    };
    fetchProduct();
  }, [slug]);

  console.log(error);
  if (error) {
    return <div>Errore durante il recupero dei dati del prodotto</div>;
  }

  return (
    <>
      <div className="title">
        <h3>Post {product.title}</h3>
      </div>
      <div className="comment-container">{product.body}</div>
    </>
  );
};

export default ProductDetails;
