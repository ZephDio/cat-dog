import { Dog, DogId } from "../domain/dog";
import { InMemoDogStore } from "../infrastructure/in-memo-dog-store";
import { GetDogYearInHumanQueryHandler, GetDogYearInHumanQuery } from "./get-dog-year-in-human.query";


describe('getDogAgeInHuman', () => {

  let stored = new Map<string,Dog>();
  let dogStore = new InMemoDogStore(stored);
  let getDogYearInHumanQueryHandler = new GetDogYearInHumanQueryHandler(dogStore);

  it('should return the dog age in human years', async () => {
    const id = new DogId('1');
    const dog = new Dog(id,'Firulais','Bulldog',2);
    stored.set(dog.id.value,dog);

    const query = new GetDogYearInHumanQuery(id);
    const result = await getDogYearInHumanQueryHandler.handle(query);

    expect(result).toBe(14);
  });

  it('should return the dog age in human years', async () => {
    const id = new DogId('2');
    const dog = new Dog(id,'Firulais','Chihuahua' ,3);
    stored.set(dog.id.value,dog);

    const query = new GetDogYearInHumanQuery(id);
    const result = await getDogYearInHumanQueryHandler.handle(query);

    expect(result).toBe(21);
  });

  it('should throw an error if the dog does not exist', async () => {
    const id = new DogId('3');
    const query = new GetDogYearInHumanQuery(id);

    expect(() => getDogYearInHumanQueryHandler.handle(query)).rejects.toThrow('Dog not found');
  })
})