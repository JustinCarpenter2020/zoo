class Angelfish {
constructor(
  name = '',
  color = '',
  sex = '',
  weight = 0,
  age = 0,
) {
  this.name = name;
  this.color = color;
  this.sex = sex;
  this.weight = weight;
  this.age = age;
  
}
eat(food) {
  console.log(`${this.name} eats the ${food}ies`)
}
}




export default Angelfish;