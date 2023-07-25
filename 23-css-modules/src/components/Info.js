import "./Info.css";
import styles from "./Info.module.css"; //отсюда импортируется объект со свс-вами
//и в других компонентах они не работают
//{info: 'Info_info__s8vxq',
//myOtherButton: 'Info_myOtherButton__8e85U'}

console.log(styles);
function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <h2>Heading in the Info component</h2>
      <button className="my-button">Click me</button>
    </div>
  );
}
export default Info;
