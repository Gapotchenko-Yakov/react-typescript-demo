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

interface IPerson extends Person {}

interface IEmployee extends IPerson {
  access: 2;
}

interface INonEmployee extends IPerson {
  access: false;
}

type Example1 = IEmployee extends IPerson ? number : string;
type Example2 = INonEmployee extends IPerson ? number : string;
