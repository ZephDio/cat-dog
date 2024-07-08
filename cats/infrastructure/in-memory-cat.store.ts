import { CatStore } from "../applicative/store/cat.store";
import { Cat, CatId } from "../domain/cat";

export class InMemoryCatStore implements CatStore{
  constructor(private cats: Map<string,Cat> = new Map()){};
  
  async save(cat: Cat) {
    this.cats.set(cat.id.value,cat);
  }

  async get(id: CatId) {
    return this.cats.get(id.value);
  }
}