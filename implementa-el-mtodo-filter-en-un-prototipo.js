let s = [23, 65, 98, 5, 13];

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea
  for (let i=0; i<this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  // Cambia solo el código encima de esta línea
  return newArray;
};


let new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s)