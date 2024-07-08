export class CatId{
  constructor(public value: string){}

  static create(): CatId{
    return new CatId(Math.random().toString());
  }
}

export class Cat {
  constructor(public id : CatId, public name: string, public breed: string, public age: number) {}

  meow() {
    return 'Meow! Meow!';
  }

  getHumanAge(){
    if(this.age <= 1){
      return this.age * 15;
    }
    if(this.age <= 2){
      return 15 + (this.age - 1) * 9;
    }
    return 24 + (this.age - 2) * 5;
  }

  static fromPayload(id : CatId, name: string, breed: string, age: number){
    //if(age < 0 || age > 30) throw new Error('Invalid age');
    return new Cat(id, name, breed, age);

  }
}

export class CatBuilder{
  private id: CatId;
  private name: string;
  private breed: string;
  private age: number;

  constructor(){
    this.id = CatId.create();
    this.name = 'defaultName';
    this.breed = 'defaultBreed';
    this.age = 2;
  }

  withId(id: CatId | string){
    this.id = typeof id === 'string' ? new CatId(id) : id;
    return this;
  }

  named(name: string){
    this.name = name;
    return this;
  }

  hasBreed(breed: string){
    this.breed = breed;
    return this;
  }

  aged(age: number){
    this.age = age;
    return this;
  }

  build(){
    return new Cat(this.id, this.name, this.breed, this.age);
  }

}