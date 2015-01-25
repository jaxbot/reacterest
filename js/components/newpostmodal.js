var PinActions = require("../actions/PinActions");
var Modal = require("./Modal");

module.exports = React.createClass({
  getInitialState: function() {
    return {
      title: "",
      description: "",
      image: ""
    };
  },
  _hide: function() {
    PinActions.hideModal();
  },
  _newPost: function() {
    PinActions.postPost(this.state);
    this._hide();
  },
  updateTitle: function(event) {
    this.state.title = event.target.value;
    this.setState(this.state);
  },
  updateImage: function(event) {
    this.state.image = event.target.value;
    this.setState(this.state);
  },
  updateDescription: function(event) {
    this.state.description = event.target.value;
    this.setState(this.state);
  },
  render: function() {
    var pin = this.props.pin;
    return (
      <Modal hide={this._hide}>
        <h2>New Post</h2>
        <input type="text" placeholder="Title" onChange={this.updateTitle}/>
        <input type="text" placeholder="Image URL" onChange={this.updateImage}/>
        <textarea placeholder="Description" onChange={this.updateDescription}></textarea>
        <button onClick={this._newPost}>Make new post</button>
      </Modal>
    );
  }
});


