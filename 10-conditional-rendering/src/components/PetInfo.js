function PetInfo(props) {
  const { animal, age, hasPet } = props; //наличие питомца через тернарный оператор
  const text = hasPet
    ? ` My ${animal} is ${age} years old`
    : "I don't have animal"; //добавили слеш чтобы убрать ошибку
  //переменную текст используем вместо строки в заголовке h1
  return <h1>{text}</h1>;
}

export default PetInfo;
