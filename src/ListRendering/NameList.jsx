import React from "react";
import Person from "./Person";

function NameList() {
  //I would like to initialize the variables
  // const names = ["Rahul", "Raj", "Rohan","Pooja"];
  // const nameList = names.map((name) => <h2>{name}</h2>);
  const persons = [
    {
      id: 101,
      name: "Pooja",
      age: "55",
      skill: "React",
    },
    {
      id: 102,
      name: "Mounika",
      age: "29",
      skill: "Java",
    },
    {
      id: 103,
      name: "Priya",
      age: "40",
      skill: "Angular",
    },
    {
      id: 104,
      name: "vaishali",
      age: "20",
      skill: "node js",
    },
  ];
  const personList = persons.map((person) => 
  <Person key={person.name} person={person}/>
  );
  return (
    <div>
      {/* {names.map((name) => (
        <h2>{name}</h2>
      ))} */}
      {/* {nameList} */}
      {personList}
    </div>
  );
}

export default NameList;
