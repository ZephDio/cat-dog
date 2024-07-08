import { Cat, CatId } from "../domain/cat";
import { CatStore } from "./store/cat.store";

export class SaveCatCommand{
  constructor(public name: string, public breed: string, public age: number){}
}

export class SaveCatCommandHandler{
  constructor(private store : CatStore) {}

  async execute(command: SaveCatCommand) {
    const id = CatId.create();
    const cat = Cat.fromPayload(id, command.name, command.breed, command.age);
    await this.store.save(cat);
    return id
  }
}