var Header = React.createClass({
  _newPost: function() {
    PinActions.newPost();
  },
  render: function() {
    return (
      <header>
        Reacterest
        <span className="new" onClick={this._newPost}>+</span>
      </header>
    );
  }
});
