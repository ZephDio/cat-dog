import { Cat, CatId } from "../../domain/cat";

export abstract class CatStore{
  abstract save(cat: Cat): Promise<void>;
  abstract get(id: CatId): Promise<Cat | undefined>;
}