export interface PersonInterface {
  id: string;
  name: string;
  age: number;
  tel: string;
  x?: any;
}

export type Persons = PersonInterface[];
