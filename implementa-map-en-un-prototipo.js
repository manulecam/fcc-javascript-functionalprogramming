Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea
  for (let i=0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  // Cambia solo el código encima de esta línea
  return newArray;
};