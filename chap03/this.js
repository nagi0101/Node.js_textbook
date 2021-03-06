console.log(this);
console.log(this === module.exports);
console.log(this == exports);

function whatIsThis() {
  console.log("function", this === module.exports, this === exports, this);
}

whatIsThis();
