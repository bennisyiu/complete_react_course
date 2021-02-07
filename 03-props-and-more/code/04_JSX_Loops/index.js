// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Friend
//           name="Elton"
//           hobbies={['Piano', 'Singing', 'Dancing']}
//         />
//         <Friend
//           name="Frida"
//           hobbies={['Drawing', 'Painting']}
//         />
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'))

class App extends React.Component {
  render() {
    return (
      <Friend name="John" hobbies={["Rock Climbing", "Wind Surfing", "Running", "Swimming", "Cooking", "Painting"]} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));