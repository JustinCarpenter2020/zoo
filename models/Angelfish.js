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
}
let angela = new Angelfish ("Angela", "red", "female", 1, 3);



export default Angelfish;