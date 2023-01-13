const squareList = arr => {
  // Cambia solo el código debajo de esta línea
  return arr
    .filter(num => num >= 1 && parseInt(num) % num === 0)
    .map(num => {return num * num})
  // Cambia solo el código encima de esta línea
};

const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
console.log(squaredIntegers);