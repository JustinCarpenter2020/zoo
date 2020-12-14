class Zebu{
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
let zoey = new Zebu ("Zoey", "white", "female", 200,16);

export default Zebu;