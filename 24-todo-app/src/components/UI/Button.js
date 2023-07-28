import styles from "./Button.module.css";

function Button({ onClick, children, title, disabled = false }) {
  //св-ва компонента

  return (
    <button
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}>
      {children}
    </button>
  ); //то что показано в компоненте будет передано в св-во children
}

export default Button;
