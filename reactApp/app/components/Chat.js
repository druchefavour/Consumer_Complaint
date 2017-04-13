
// Include React
var React = require("react");

var ChatApp = React.createClass({
	getInitialState: function (){
		return {
			messages: [],
			socket:window.io("http://localhost:3000")
		}
	},
	componentDidMount: function () {
		var self = this;
		this.state.socket.on('receive-message', function(msg){
			console.log(msg);
			self.setState(messages:self.state.message.push(msg)})
		});
	},
	submitMessage: function(){
		var message = document.getElementById ("message").value;
		this.state.socket.emit("new-message", message)
		console.log(message);
	};
	render: function () {
		var self = this,
		return {
			<div>
			  <ul>

			  </ul>
			  <input id="message" type="text"/><button onClick={()=> self.submitMessage()}></button>
			</div>
		}
	}
});
//window.ReactDOM.render(
//	<ChatApp/>,
//	document.getElementById("chat")
//	);

// Export the componen back for use in other files
module.exports = ChatApp;