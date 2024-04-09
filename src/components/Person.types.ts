export type Name = {
  first: string;
  last: string;
};

type Person = {
  name: Name;
  age: number;
  occupation: string;
  alive: boolean;
};

export type PersonProps = Person;

type I1 = Person["name" | "occupation"];
type I2 = Person[keyof Person];
