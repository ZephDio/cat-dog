import { CatId } from "../domain/cat";
import { CatStore } from "./store/cat.store";

export class GetCatMeowingQuery{
  constructor(public catId: CatId){}
}

export class GetCatMeowingQueryHandler{
  constructor(private store : CatStore) {}

  async handle(query: GetCatMeowingQuery) {
    const cat = await this.store.get(query.catId);
    if(!cat) throw new Error('Cat not found');
    return cat.meow();
  }
}