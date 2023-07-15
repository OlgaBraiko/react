function PetInfo(props) {
  //нельзя менять сво-ва в компоненте
  const { animal, age } = props; //деструктуризация
  return (
    <h1>
      My {animal} is {age} years old
    </h1>
  ); //доступ к сво-ву через точечную запись
}

export default PetInfo;
