class Stingray {
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
let sarah = new Stingray ("Sarah", "blue", "female", 50, 8);


export default Stingray;