function Wrapper(props) {
  //передаем props и сво-во children

  return <div>{props.children}</div>;
}

export default Wrapper;
//сво-во children для вложенности
