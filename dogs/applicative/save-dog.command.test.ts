import { Dog } from "../domain/dog";
import { InMemoDogStore } from "../infrastructure/in-memo-dog-store";
import { SaveDogCommandHandler } from "./save-dog.command";


describe('save dog command', () => {

  let stored = new Map<string,Dog>();
  let dogStore = new InMemoDogStore(stored);
  let saveDogCommandHandler = new SaveDogCommandHandler(dogStore);


  it('should save a Chihuahua', async () => {
    const command = {name: 'Firulais', breed: 'Chihuahua', age: 2};
    const id = await saveDogCommandHandler.handle(command);
    expect(stored.get(id.value)).toBeDefined();
  });

  it('should save a Bulldog', async () => {
    const command = {name: 'MonsterTruck', breed: 'Bulldog', age: 2};
    const id = await saveDogCommandHandler.handle(command);
    expect(stored.get(id.value)).toBeDefined();
  })

  
})