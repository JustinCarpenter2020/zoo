class Jaguar {
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
let john = new Jaguar ("John", "yellow", "male", 79, 10);

export default Jaguar;