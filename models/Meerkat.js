class Meerkat {
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
let matt = new Meerkat ("Matt", "yellow", "male", 2, 8);

export default Meerkat;