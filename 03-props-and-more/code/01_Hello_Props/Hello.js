// class Hello extends React.Component {
//   render() {
//     return <p>Hi {this.props.to} from {this.props.from}</p>;
//   }
// }

class HellYeah extends React.Component {
  render() {
    let bangs = "!".repeat(this.props.bangs);
    return (
      <div>
        <h2>Hi {this.props.to} from {this.props.from}{bangs}</h2>
        <img src={this.props.img}/>
      </div>
    );
  }
}
