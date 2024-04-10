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

type IdLabel = {};
type NameLabel = {};

type IdOrNameLabel<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(content: T): IdOrNameLabel<T> {
  throw "unimplemented";
}

let a = createLabel("some text");
let b = createLabel(12);
