import { Dog, DogId } from "../domain/dog";
import { InMemoDogStore } from "../infrastructure/in-memo-dog-store";
import { GetDogBarkingQuery, GetDogBarkingQueryHandler } from "./get-dog-barking.query";

describe('getDogBarking', () => {
  
    let stored = new Map<string,Dog>();
    let dogStore = new InMemoDogStore(stored);
    let getDogBarkingQueryHandler = new GetDogBarkingQueryHandler(dogStore);
  
    it('should return the dog barking, for BullDog', async () => {
      const id = new DogId('1');
      const dog = new Dog(id,'Firulais','Bulldog',2);
      stored.set(dog.id.value,dog);
  
      const query = new GetDogBarkingQuery(id);
      const result = await getDogBarkingQueryHandler.handle(query);
  
      expect(result).toBe('Woof! Woof!');
    });
  
    it('should return the dog barking, for Chihuahua',async  () => {
      const id = new DogId('2');
      const dog = new Dog(id,'Firulais','Chihuahua' ,3);
      stored.set(dog.id.value,dog);
  
      const query = new GetDogBarkingQuery(id);
      const result = await getDogBarkingQueryHandler.handle(query);
  
      expect(result).toBe('Woof! Woof!');
    });
  
    it('should throw an error if the dog does not exist',async () => {
      const id = new DogId('3');
      const query = new GetDogBarkingQuery(id);
  
      expect(getDogBarkingQueryHandler.handle(query)).rejects.toThrow('Dog not found');
    })
  })