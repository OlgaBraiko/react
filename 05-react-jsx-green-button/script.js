const App = ({ initialText, initialClassesList }) => {
  //создаем состояние компонента и передаем начально значение и получаем
  // массив из двух элементов: значение строки и функция для нового значения первого элемента
  const [btnText, setBtnText] = React.useState(initialText); //деструктуризация массива, передаем начально значение
  const [classesList, setClassesList] = React.useState(initialClassesList); //деструктуризация массива , пустая строка тк изначально нет класса для кнопки

  const onBtnClick = () => {
    setBtnText("Hello from React"); //меняем значение
    setClassesList("green-btn"); //меняем значение
  };
  return (
    <div className="app">
      <button
        className={classesList} //добавляем класс для применения
        //стилей в виде выражения
        onClick={onBtnClick}>
        {btnText}
      </button>
    </div> //кнопке добавляем класс , тк как реакт то пишем класснейм,
    //далее добавляем онклик и передаем функцию которая должна сработать
    //после клика и между тегами кнопок кладем начальное значение
  );
};

//создаем анонимную функцию для изменения текста на кнопке 2 str
//для отображения текста в реакт переносим все в функциональный компонент и добавить состояние 6
//переносим переменные в компонент App

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App initialText="Click me" initialClassesList="" />); //добавляем jsx
