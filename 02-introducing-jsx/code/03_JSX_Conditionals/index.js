// function getNum() {
// 	return Math.floor(Math.random() * 10) + 1;
// }
// class NumPicker extends React.Component {
// 	render() {
// 		const num = getNum();
// 		let msg;
// 		if (num === 7) {
// 			msg =
// 				<div>
// 					<h2>CONGRATS YOU WIN!</h2>
// 					<img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
// 				</div>
// 		} else {
// 			msg = <p>Sorry You Lose!</p>
// 		}
// 		return (
// 			<div>
// 				<h1>Your number is: {num} </h1>
// 				{msg}
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<NumPicker />, document.getElementById('root'));

function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 7 ) {
      msg =
      <div>
        <h1>Yay!!! You won!</h1>
        <img src="https://www.teamjimmyjoe.com/wp-content/uploads/2017/02/funny-Little-Kim-Jong-un.gif" />
      </div>

    } else {
      msg = "Sorry! You lose!"

    }
    return (
      <div>
        <h1>Your lucky number is {num} </h1>
        {msg}
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
