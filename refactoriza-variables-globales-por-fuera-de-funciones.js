// La variable global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add(bookList, bookName) {
  let newArr = [];
  for (let i = 0; i < bookList.length;i++) {
    newArr.push(bookList[i]);
  }
  newArr.push(bookName);
  return newArr;

  // Cambia el código encima de esta línea
}

// Cambia el código debajo de esta línea
function remove(bookList, bookName) {
  let newArr = [];
  // Me da la posicion del elemento a eliminar
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    for (let i=0;i < bookList.length;i++){
      if (i != bookList.indexOf(bookName)) {
        newArr.push(bookList[i]);
      }
    }
    return newArr;
    // Cambia el código encima de esta línea
    }
}

remove(bookList, "On The Electrodynamics of Moving Bodies");
add(bookList, "Game of Thrones: a Song of Ice an Fire");