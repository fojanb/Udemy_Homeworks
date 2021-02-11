//App.js is our react component (Function Component)
// import React, { Component } from "react"; //React.createElement() is from here.also setState()
import "./App.css";
import React, { Component } from "react"; //We need this line for building a 'class compnonet'
import Person from "./components/Person"; //App.js is Person.js's parent.
import person from "./components/Person";
//-------------------------Class Componenet------------------------------------
class App extends Component {
  //Class Component
  state = {
    //State is an JS object
    persons: [
      //persons is array of objects (JSON format)
      //id must be UNIQUE
      { id: '1' , name: "Mike", age: 20 },
      { id: '2' , name: "Jenny", age: 32 },
      { id: '3' , name: "Niel", age: 40 },
    ],
    otherState: "Other type of state",
    showPersons: false,
  };
  // ----------------------------------------------------------
  styles = {
    fontFamily: "monospace",
    backgroundColor: "gold",
    borderRadius: "10px",
    border: "none",
    padding: "15px",
    cursor: "pointer",
    margin: "10px",
    boxShadow:'5px 5px lightslategray',
    fontWeight:'bold'
    
  };
  //-----------------Event Handlers <start>---------------------
  buttonHandler = (newName) => {
    console.log("You clicked the button!");
    //DO NOT DO THIS : this.state.persons[0].name="Fojan"
    this.setState({
      //setState() is a method in 'Component' class and App inheret it.
      persons: [
        {id:'1', name: newName, age: 20 }, //Instead of hard-coding I passed a parameter to buttonHandler()
        { id:'2',name: "Jenny", age: 40 },
        { id:'3',name: "Niel", age: 40 },
      ],
    });
  };

  changeNameHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id===id; //Index has been found so far
    });

    const person = {...this.state.persons[personIndex]}; //Each person in persons is an object{}
    person.name=event.target.value;

    const persons=[...this.state.persons]; //A copy of state.persons
    persons[personIndex]=person;
    this.setState({persons:persons});
      //setState() is a method in 'Component' class and App inheret it.
      
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow }); //showPersons has been updated with new boolean
  };

  personDeleteHandler = (personIndex) => {
    //const persons = this.state.persons  //Fetch persons(Array of Objects) in state
    // const persons = this.state.persons.slice(); //Fetch a copy of persons(Array of Objects) in state
    const persons = [...this.state.persons]  //Fetch a copy of persons(Array of Objects) in state
    persons.splice(personIndex, 1); //This line will remove item from arr
    this.setState({ persons: persons });
  };
  
  //-----------------Event Handlers <finish>---------------------

  render() {
    let persons = null; //Default
    {
      /* Conditional rendering_If statement using Lists : Way #4 ===> the best practice!!!*/
    }
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.personDeleteHandler(index)} //A list
                change={(event)=>this.changeNameHandler(event,person.id)}
                name={person.name}
                age={person.age}
                key={person.id} //Key is UNIQUE since id is unique
              ></Person>
            );
          })}
        </div>
      );

      {
        /* Conditional rendering_If statement : Way #3 */
      }
      // persons = (
      //   <div>
      //       <Person
      //         //We used bind() for passing parameter to our buttonHandler function:
      //         click={this.buttonHandler.bind(this, "Foji!")}
      //         // or click = {() => this.buttonHandler("Foji!")}
      //         name={this.state.persons[0].name}
      //         age={this.state.persons[0].age}
      //       >
      //         My hobby : Chess
      //       </Person>
      //       <Person
      //         name={this.state.persons[1].name}
      //         age={this.state.persons[1].age}
      //         change={this.changeNameHandler} //When working with <input/> tag
      //       />
      //       <Person
      //         name={this.state.persons[2].name}
      //         age={this.state.persons[2].age}
      //       />
      //     </div>
      // );
    }

    //Method #1 :
    return (
      <div className="app">
        <button style={this.styles} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        <h1>Hi, I am a react app</h1>
        {persons}
        {/* Conditional rendering_Ternary Expression : Way #2 */}
        {/* {this.state.showPersons ? (
          <div>
            {this.state.persons.map((person) => {
              return <Person name={person.name} age={person.age}></Person>;
            })}
          </div>
        ) : null} */}

        {/* Conditional rendering_Ternary Expression  : Way #1 */}
        {/* {this.state.showPersons ? ( //IF-ELSE Conditional statement in JSX
          <div>
            <Person
              //We used bind() for passing parameter to our buttonHandler function:
              click={this.buttonHandler.bind(this, "Foji!")}
              // or click = {() => this.buttonHandler("Foji!")}
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            >
              My hobby : Chess
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              change={this.changeNameHandler} //When working with <input/> tag
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null} */}
      </div>
    );
    //Method#2 :
    // return React.createElement('div',{className:'app'},React.createElement('h1',null,'I am Fojan'))
  }
}
export default App;

//----------------------Function Component --------------------------------
// import "./App.css";
// import React, { useState} from "react"; //We need this line for building a 'function compnonet'
// import Person from "./components/Person";
// const app = (props) => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       //persons is array of objects (JSON format)
//       { name: "Mike", age: 20 },
//       { name: "Jenny", age: 32 },
//       { name: "Niel", age: 40 },
//     ],
//     otherState :'Other type of state'
//   });
//   console.log(personState);
//   // console.log(setPersonState);

//   const buttonHandler = () => {
//     console.log("You clicked the button!");
//     //DO NOT DO THIS : this.state.persons[0].name="Fojan"
//     setPersonState({
//       //Note :setState() is a method in Component class and App inheret it.
//       persons: [
//         { name: "Fojan", age: 20 },
//         { name: "Jenny", age: 40 },
//         { name: "Niel", age: 40 },
//       ],
//       otherState :'Other type of state' //or otherState :personState.otherState

//     });
//   };

//   //Method #1 :
//   return (
//     <div className="app">
//       <button onClick={buttonHandler}>Swith Name</button>
//       <h1>Hi, I am a react app</h1>
//       <Person
//         name={personState.persons[0].name}
//         age={personState.persons[0].age}
//       >
//         My hobby : Chess
//       </Person>
//       <Person
//         name={personState.persons[1].name}
//         age={personState.persons[1].age}
//       />
//       <Person
//         name={personState.persons[2].name}
//         age={personState.persons[2].age}
//       />
//     </div>
//   );
//   //Method#2 :
//   // return React.createElement('div',{className:'app'},React.createElement('h1',null,'I am Fojan'))
// };
// export default app;

// --------------------other notation of Function Component :--------------------------
// function App(props) { //Function Component
//   return (
//     <div className="app">
//       <h3>Name: {props.name}</h3>
//       <p>Age : {props.age}</p>
//     </div>

//   );
// }

// export default App;