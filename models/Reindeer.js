class Reindeer{
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
let ralph = new Reindeer ("Ralph", "brown", "male", 632, 12);


export default Reindeer;