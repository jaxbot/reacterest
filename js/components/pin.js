var Pin = React.createClass({
  getInitialState: function() {
    return {
      pinned: this.props.pin.pinned
    };
  },
  _onPinClick: function() {
    if (this.props.pin.pinned)
      PinActions.unpinPost(this.props.pin.id);
    else
      PinActions.pinPost(this.props.pin.id);
    return false;
  },
  _onPostClick: function() {
    PinActions.showPost(this.props.pin.id);
  },
  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(Store.getPinState(this.props.pin.id));
  },
  render: function() {
    var pin = this.props.pin;

    var pinButton;
    var pinButtonClasses = ["pinButton", this.state.pinned ? "pinned" : ""].join(" ");
    pinButton = <button onClick={this._onPinClick} className={pinButtonClasses}>Pin</button>;
    var pinClasses = ["pin", this.state.pinned ? "pinned" : ""].join(" ");

    return (
      <div className={pinClasses} onClick={this._onPostClick}>
        <img src={pin.image} alt={pin.title} />
        <h2>{pin.title}</h2>
        {pinButton}
      </div>
    );
  }
});


