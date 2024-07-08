import { Dog, DogId } from "../domain/dog";
import { DogStore } from "./store/dog-store";

export class SaveDogCommand{
  constructor(public name: string, public breed: string, public age: number){}
}

export class SaveDogCommandHandler{
  constructor(private store : DogStore) {}

  async handle(command: SaveDogCommand) {
    const id = DogId.create();
    const dog = new Dog(id,command.name, command.breed, command.age);
    await this.store.save(dog);
    return id
  }
}