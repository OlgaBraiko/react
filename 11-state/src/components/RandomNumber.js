import { useState } from "react"; //получаем хук из библиотеки
import generateRandomNum from "../utils/generateRandomNum";
function RandomNumber(props) {
  const { maxNum } = props; //добовляем сво-во
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum)); //деструктуризация, первый элемент радномное число которое будет меняться, второй это функция

  const changeRandomNum = () => {
    setRandomNum(generateRandomNum(maxNum)); //генерируем случайное число и передаем в фн-ию setRandomNum
  };

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate new random number</button>
    </div>
  );
}

export default RandomNumber;

//добвляем состояние и по клике на кнопку изменять состояние
//1 для кнопки добавить св-во OnClick и значение этого
//св-ва будет функция , которая будет срабатывать при клике
