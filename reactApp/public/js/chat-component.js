var ChatApp = React.createClass({
	getInitialState: function (){
		return {
			messages: [],
			socket:window.io("http://localhost:3000")
		}
	},
	componentDidMount: function () {
		this.state.socket.emit('test');
	},
	render: function () {
		return {
			<div>
			  This will be the chat application
			</div>
		}
	}
});
ReactDOM.render(
	<ChatApp/>,
	document.getElementById("chat")
	);