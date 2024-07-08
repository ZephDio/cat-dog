import { CatId } from "../domain/cat";
import { CatStore } from "./store/cat.store";

export class GetCatAgeInHumanQuery{
  constructor(public id: CatId){}
}

export class GetCatAgeInHumanQueryHandler{
  constructor(private store : CatStore) {}

  async handle(query: GetCatAgeInHumanQuery) {
    const cat = await this.store.get(query.id);
    if(!cat){
      throw new Error('Cat not found');
    }
    return cat.getHumanAge();
  }
}