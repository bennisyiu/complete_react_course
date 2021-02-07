// class Friend extends React.Component {
//   render() {
//     const { name, hobbies } = this.props;

//     return (
//       <div>
//         <h1>{name}</h1>
//         <ul>
//           {hobbies.map(h => <li>{h}</li>)}
//         </ul>
//       </div>
//     )
//   }
// }

class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props;
    return (
      <div>
        <h2>My friend's name is {name} and he likes ...</h2>
        <ul>
          {hobbies.map(h => <li>{h}</li>)}
        </ul>
      </div>

    )
  }

}