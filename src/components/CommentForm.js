import { useState } from "react";
import { URL } from "../constants/utils";
import "../styles/commentForm.css";
import Card from "./Card";

const CommentForm = (props) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const updateAuthor = (e) => setAuthor(e.target.value);
  const updateText = (e) => setText(e.target.value);

  const postComment = (e) => {
    e.preventDefault();

    const data = {
      author_name: author,
      text: text,
      post: props.postId,
    };

    fetch(URL + `/posts/${props.postId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        if (resData.comment) {
          props.addComment(resData.comment);
        }
      });
  };

  return (
    <Card style={style}>
      <form className="comment-form" onSubmit={postComment}>
        <h4>Add Comment</h4>

        <input
          type="text"
          placeholder="Name"
          name="name"
          value={author}
          onChange={updateAuthor}
        />
        <textarea
          type="textarea"
          placeholder="Say something..."
          name="text"
          value={text}
          onChange={updateText}
        />
        <button type="submit">Post</button>
      </form>
    </Card>
  );
};

const style = {
  width: "80%",
  height: "250px",
  padding: "5px",
  marginTop: "50px",
  background: "linear-gradient(-45deg,rgba(161,165,162,.219608),transparent)",
};

export default CommentForm;
