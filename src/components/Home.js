import Card from "./Card";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  const viewPostDetail = (post) => {
    navigate(`/post/${post._id}`, { state: { post: post } });
  };

  return (
    <div className="home">
      {props.posts.map((post) => (
        <Card key={post._id} style={style}>
          <div className="content" onClick={viewPostDetail.bind(this, post)}>
            <h2>{post.title}</h2>
            <div className="date-container">
              <p>{new Date(post.publish_date).toDateString()}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

const style = {
  marginBottom: "30px",
  padding: "5px",
  textAlign: "center",
};

export default Home;
