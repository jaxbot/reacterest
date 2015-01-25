var Pin = require("./pin");
var PostModal = require("./PostModal");
var NewPostModal = require("./NewPostModal");
var Store = require("../stores/Store");

module.exports = React.createClass({
  getInitialState: function() {
    return {
      currentPin: null,
      show: {}
    };
  },
  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(Store.getPinListState());
  },
  render: function() {
    var postModal = this.state.show.post ?
      (<PostModal pin={this.state.currentPin} />) : null;
    var newPostModal = this.state.show.newPost ?
      (<NewPostModal />) : null;
    var pinNodes = this.props.data.map(function (pin) {
      return (
        <Pin pin={pin} />
      );
    });
    return (
      <div className="pinList">
        {postModal}
        {newPostModal}
        {pinNodes}
      </div>
    );
  }
});

