import { useState } from "react";

function Login() {
  const [username, setUserName] = useState(""); //первый элемент имя юзера, второй фун-ия которая его меняет
  const [password, setPassword] = useState(""); //в useState начальное значение пустая строка

  function handleFormSubmit(event) {
    event.preventDefault();

    const userData = {
      username: username,
      password: password,
    };
    console.log(userData);
    alert(JSON.stringify(userData));
  }

  //добавить значение инпутам
  //onChange обработчик для инпутов
  //функцию можно создать внутри onChange
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
