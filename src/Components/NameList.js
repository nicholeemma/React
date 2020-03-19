import React from 'react'
import Person from './Person'

function NameList() {
    const  names = ['Brue','Diana','Nico']
const nameList =  names.map((name, index) => <h2 key ={index}>{index}{name}</h2>)
    const person = [{
        id:3,
        name : 'andy',
        age: 32
    }, {
        id: 4,
        name : 'chad',
        age: 45
    }]
// const personList = person.map(person => <h2>I am {person.name} and I am {person.age}</h2>)
const personList = person.map(person => <Person key = {person.id} person = {person}></Person>)
    return (
        // <div>
        //   <h2>{names[0]}</h2>  
        //   <h2>
        //   {names[1]}
        //   </h2>
        //   <h2>{names[2]}</h2>
        // </div>
        <div>
            {
                 nameList
            //    personList 
            }
        </div>
    )
}

export default NameList

