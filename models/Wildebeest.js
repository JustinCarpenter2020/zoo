class Wildebeest{
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
let wilson = new Wildebeest ("Wilson", "brown", "male", 260, 12);

export default Wildebeest;