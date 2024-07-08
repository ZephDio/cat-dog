import { DogId } from "../domain/dog";
import { DogStore } from "./store/dog-store";



export class GetDogBarkingQuery{
  constructor(public dogId: DogId){}
}

export class GetDogBarkingQueryHandler{
  constructor(private store : DogStore) {}

  async handle(query: GetDogBarkingQuery) {
    const dog = await this.store.get(query.dogId);
    if(!dog) throw new Error('Dog not found');
    return dog.bark();
  }
}