import Card from "./Card";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  const viewPostDetail = (post) => {
    navigate(`/post/${post._id}`, { state: { post: post } });
  };

  if (!props.isLoading) {
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
  } else {
    return <div>Loading...</div>;
  }
};

const style = {
  width: "340px",
  marginBottom: "30px",
  marginLeft: "30px",
  marginRight: "30px",
  padding: "5px",
  textAlign: "center",
};

export default Home;
