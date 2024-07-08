import { DogId } from "../domain/dog";
import { DogStore } from "./store/dog-store";

export class GetDogYearInHumanQuery{
  constructor(public id : DogId){}
}

export class GetDogYearInHumanQueryHandler{
  constructor(private store : DogStore) {}

  async handle(query: GetDogYearInHumanQuery) {
    const dog = await this.store.get(query.id);
    if(!dog) throw new Error('Dog not found');
    return dog.getHumanAge();
  }
}