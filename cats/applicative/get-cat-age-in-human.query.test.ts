import { Cat, CatBuilder, CatId } from "../domain/cat";
import { CatFactory } from "../domain/cat-factory";
import { InMemoryCatStore } from "../infrastructure/in-memory-cat.store";
import { GetCatAgeInHumanQuery, GetCatAgeInHumanQueryHandler } from "./get-cat-age-in-human.query";

describe('getCatAgeInHuman', () => {
    
      let stored = new Map<string,Cat>();
      let catStore = new InMemoryCatStore(stored);
      let getCatAgeInHumanQueryHandler = new GetCatAgeInHumanQueryHandler(catStore);
    
      it('should return the cat age in human years, 2 years old', async () => {
        const cat = CatFactory.MainCoonWith2YearsOld();
        stored.set(cat.id.value,cat);
    
        const query = new GetCatAgeInHumanQuery(cat.id);
        const result = await getCatAgeInHumanQueryHandler.handle(query);
    
        expect(result).toBe(24);
      });
    
      it('should return the cat age in human years, 3 years old', async  () => {
        const cat = CatFactory.PersianWith3YearsOld();
        stored.set(cat.id.value,cat);
    
        const query = new GetCatAgeInHumanQuery(cat.id);
        const result = await getCatAgeInHumanQueryHandler.handle(query);
    
        expect(result).toBe(29);
      });
    
      it('should throw an error if the cat does not exist',async () => {
        const id = new CatId('3');
        const query = new GetCatAgeInHumanQuery(id);
    
        expect(getCatAgeInHumanQueryHandler.handle(query)).rejects.toThrow('Cat not found');
      })
    })