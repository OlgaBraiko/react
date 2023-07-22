function Wrapper(props) {
  const style = {
    backgroundColor: props.color,
    width: "250px",
    padding: "20px",
    margin: "20px auto",
  };
  //передаем props и сво-во children

  return <div style={style}>{props.children}</div>;
}

export default Wrapper;
//сво-во children для вложенности
