import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAuthFromLS } from "../contexts/AuthContext";

const PostDetail = () => {
  const [post, setPost] = useState<any>([]);
  const [comments, setComments] = useState<any>([]);
  const [error, setError] = useState<string | null | boolean>(null);
  const navigate = useNavigate();
  const { slug } = useParams();
  console.log(slug);
  console.log(getAuthFromLS());
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${slug}`
        );
        if (!response.ok) {
          setError(!response.ok);
        }
        const postData = await response.json();
        setPost(postData);
      } catch (error: any) {
        setError(error);
        console.error("Error fetch data", error);
      }
    };
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${slug}/comments`
        );
        if (!response.ok) {
          setError(!response.ok);
        }
        const postData = await response.json();
        setComments(postData);
      } catch (error: any) {
        setError(error);
        console.error("Error fetch data", error);
      }
    };
    fetchPost();
    fetchComments();
  }, [slug]);

  console.log(error);
  console.log(comments);
  if (error) {
    return <div>Errore durante il recupero dei dati del prodotto</div>;
  }

  return (
    <>
      <div className="title">
        <h3>Post {post.title}</h3>
      </div>
      <div className="comment-container">
        <ul>
          {comments.map((comment: any) => {
            return <li key={comment.id}>{comment.body}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default PostDetail;
