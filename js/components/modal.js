module.exports = React.createClass({
  _hide: function() {
    this.props.hide();
  },
  render: function() {
    var pin = this.props.pin;
    return (
      <div>
        <div className="background_fader" onClick={this._hide} />
        <div className="modal">
          {this.props.children}
        </div>
      </div>
    );
  }
});

