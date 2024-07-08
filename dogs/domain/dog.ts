export class DogId{
  constructor(public value: string){}

  static create(): DogId{
    return new DogId(Math.random().toString());
  }
}

export class Dog{

  constructor(public id: DogId , public name: string, public breed: string, public age: number){}

  bark(){
    return 'Woof! Woof!';
  }

  getHumanAge() {
    return this.age * 7;
  }
}