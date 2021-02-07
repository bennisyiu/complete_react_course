// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Hello to="Ringo" from="Paul" />
//         <Hello to="Cher" from="Sonny" />
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'))

class App extends React.Component {
  render() {
    return (
      <div>
        <HellYeah 
          to="Jane" 
          from="John" 
          bangs={4} 
          img="https://giphy.com/embed/3o6fJcIM6mG3Ad6lAk"
        /> 
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));