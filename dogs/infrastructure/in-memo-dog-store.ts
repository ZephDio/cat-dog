import { DogStore } from "../applicative/store/dog-store";
import { Dog, DogId } from "../domain/dog";

export class InMemoDogStore implements DogStore{
  constructor(private dogs: Map<string,Dog> = new Map()){};

  async save(dog: Dog) {
    this.dogs.set(dog.id.value,dog);
  }

  async get(id: DogId) {
    return this.dogs.get(id.value);
  }
}