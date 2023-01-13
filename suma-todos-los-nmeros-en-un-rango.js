function sumAll(arr) {
  let suma = 0;
  let a = arr[0];
  let b = arr[1];
  let numeroMayor = 0;
  let numeroMenor = 0;
  //
  if (a > b) {
    numeroMayor = a;
    numeroMenor = b;
  } else {
    numeroMayor = b;
    numeroMenor = a;
  };
  //
  for (let i=numeroMenor; i<=numeroMayor; i++) {
    suma += i;
  }

  return suma;
}

console.log(sumAll([10, 5]));