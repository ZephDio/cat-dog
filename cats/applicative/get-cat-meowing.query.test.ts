import { Cat, CatId } from "../domain/cat";
import { CatFactory } from "../domain/cat-factory";
import { InMemoryCatStore } from "../infrastructure/in-memory-cat.store";
import { GetCatMeowingQuery, GetCatMeowingQueryHandler } from "./get-cat-meowing.query";

describe('get cat meowing', () => {
  
    let stored = new Map<string,Cat>();
    let catStore = new InMemoryCatStore(stored);
    let getCatMeowingQueryHandler = new GetCatMeowingQueryHandler(catStore);
  
    it('should return the cat meowing, for Persian', async () => {
      const cat = CatFactory.PersianWith3YearsOld()
      stored.set(cat.id.value,cat);
  
      const query = new GetCatMeowingQuery(cat.id);
      const result = await getCatMeowingQueryHandler.handle(query);
  
      expect(result).toBe('Meow! Meow!');
    });
  
    it('should return the cat meowing, for MainCoon',async  () => {
      const cat = CatFactory.MainCoonWith2YearsOld();
      stored.set(cat.id.value,cat);
  
      const query = new GetCatMeowingQuery(cat.id);
      const result = await getCatMeowingQueryHandler.handle(query);
  
      expect(result).toBe('Meow! Meow!');
    });
  
    it('should throw an error if the cat does not exist',async () => {
      const id = new CatId('3');
      const query = new GetCatMeowingQuery(id);
  
      expect(getCatMeowingQueryHandler.handle(query)).rejects.toThrow('Cat not found');
    })
  })