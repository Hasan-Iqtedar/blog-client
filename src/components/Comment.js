import Card from "./Card";
import "../styles/comment.css";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <Card style={style}>
        <h4>{comment.author_name}</h4>
        <p>{comment.text}</p>
      </Card>
    </div>
  );
};

const style = {
  width: "100%",
  padding: "5px",
};

export default Comment;
