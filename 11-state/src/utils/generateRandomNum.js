function generateRandomNum(maxNum) {
  return Math.floor(Math.random() * maxNum); //умножаем на сто чтобы получить число от 1 до 100 и применим метод floor чтобы число было целым
}

export default generateRandomNum;
