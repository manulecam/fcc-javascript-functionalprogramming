function sentensify(str) {
  // Cambia solo el código debajo de esta línea
  let newStr = str.split(/\W/);
  let spaceStr = newStr.join(" ");
  return spaceStr;

  // Cambia solo el código encima de esta línea
}

sentensify("The.force.is.strong.with.this.one");