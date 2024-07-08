import { Dog, DogId } from "../../domain/dog";

export abstract class DogStore{
  abstract save(dog: Dog): Promise<void>

  abstract get(id: DogId): Promise<Dog | undefined>
}