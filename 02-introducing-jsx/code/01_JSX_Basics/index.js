// function getMood() {
// 	const moods = [ 'Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid' ];
// 	return moods[Math.floor(Math.random() * moods.length)];
// }
// class JSXDemo extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>My Current Mood is: {getMood()}</h1>
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<JSXDemo />, document.getElementById('root'));

function getMood() {
  const moods = ['Angry', 'Happy', 'Annoyed', 'Silly', 'Paranoid']
  return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
      <h1>This is my mood: {getMood()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
