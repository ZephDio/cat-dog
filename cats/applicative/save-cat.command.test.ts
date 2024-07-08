import { Cat } from "../domain/cat";
import { InMemoryCatStore } from "../infrastructure/in-memory-cat.store";
import { SaveCatCommandHandler } from "./save-cat.command";


describe('save cat command', () => {

  let stored = new Map<string,Cat>();
  let catStore = new InMemoryCatStore(stored);
  let saveCatCommandHandler = new SaveCatCommandHandler(catStore);


  it('should save a Persian', async () => {
    const command = {name: 'Mimine', breed: 'Persian', age: 2};
    const id = await saveCatCommandHandler.execute(command);
    expect(stored.get(id.value)).toBeDefined();
  });

  it('should save a MainCoon', async () => {
    const command = {name: 'Minette', breed: 'MainCoon', age: 2};
    const id = await saveCatCommandHandler.execute(command);
    expect(stored.get(id.value)).toBeDefined();
  })

  
})