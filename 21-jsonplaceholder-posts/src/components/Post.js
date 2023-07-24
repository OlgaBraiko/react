import "./Post.css";

function Post(props) {
  const { id, title, userId, body } = props;
  return (
    <div className="post">
      <small>{id}</small>
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>{userId}</h3>
    </div>
  ); //вывели в интерфейс к юзеру
}

export default Post;
