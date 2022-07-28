import React from 'react';

function Persons({person,key}) {
  return (
    <div>
      <h2>
     {key} My name is:{person.age}.
       I am {person.age} years old. 
       I know {person.skill}
    </h2>
    </div>
  );
}

export default Persons;
