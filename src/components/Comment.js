import { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/comment.css";
import { URL } from "../constants/utils";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <Card style={style}>
        <h4>{comment.author_name}</h4>
        <p>
          {comment.text}
          {/* A very nice post indeed! Eye Opening and wonderful. A very nice post
          indeed! Eye Opening and wonderful. A very nice post indeed! Eye
          Opening and wonderful. A very nice post indeed! Eye Opening and
          wonderful. A very nice post indeed! Eye Opening and wonderful. A very
          nice post indeed! Eye Opening and wonderful. A very nice post indeed!
          Eye Opening and wonderful. A very nice post indeed! Eye Opening and
          wonderful. A very nice post indeed! Eye Opening and wonderful. A very
          nice post indeed! Eye Opening and wonderful. A very nice post indeed!
          Eye Opening and wonderful. */}
        </p>
      </Card>
    </div>
  );
};

const style = {
  width: "100%",
  padding: "5px",
};

export default Comment;
