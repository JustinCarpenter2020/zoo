class Parrot {
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
let pete = new Parrot ("Pete", "yellow", "female", 5, 38);