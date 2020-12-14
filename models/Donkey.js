class Donkey{

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

  let daniel = new Donkey ("Daniel", "black", "male", 570, 18);

  export default Donkey;