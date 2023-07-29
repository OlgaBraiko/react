import styles from "./Button.module.css";

function Button(props) {
  const { children, disabled = false } = props;
  //св-ва компонента

  return (
    <button
      {...props} //делим на св-ва  и исп из компонента TodoForm
      className={styles.button}
      disabled={disabled}>
      {children}
    </button>
  ); //то что показано в компоненте будет передано в св-во children
}

export default Button;
