import React from "react";
import { PersonProps } from "./Person.types";

// name={{ first: "John", last: "Smith" }}
// age={27}
// occupation={"engeneer"}
// alive={true}

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
