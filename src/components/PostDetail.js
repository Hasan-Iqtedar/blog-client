import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "../styles/postDetail.css";
import { URL } from "../constants/utils";

const PostDetail = (props) => {
  const { state } = useLocation();
  const [comments, setComments] = useState([]);

  const updateComments = (comments) => setComments(comments);

  const addComment = (comment) => {
    const updatedComments = [...comments, comment];

    updateComments(updatedComments);
  };

  useEffect(() => {
    fetch(URL + `/posts/${state.post._id}/comments`, {
      method: "GET",
      headers: { "Content-Type": "Application/json" },
    }).then((res) =>
      res.json().then((resData) => {
        updateComments(resData);
      })
    );
  }, []);

  return (
    <div className="post-detail">
      <div className="content">
        <h2> {state.post.title} </h2>
        {state.post.content}
      </div>
      {comments.map((comment) => {
        return <Comment key={comment._id} comment={comment} />;
      })}

      <CommentForm postId={state.post._id} addComment={addComment} />
    </div>
  );
};

export default PostDetail;
