import { CatBuilder } from "./cat"

export const CatFactory = {
  PersianWith3YearsOld: () => {
    return new CatBuilder().aged(3).hasBreed('Persian').withId('1').build();
  },
  MainCoonWith2YearsOld: () => {
    return new CatBuilder().aged(2).hasBreed('MainCoon').withId('2').build();
  }
}
  