class Elephant {
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
  let ellie = new Elephant ("ellie", "gray", "female", 8000, 60);


  export default Elephant;