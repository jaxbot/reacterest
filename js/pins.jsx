var PinList = React.createClass({
    render: function() {
        var pinNodes = this.props.data.map(function (pin) {
            return (
                <Pin pin={pin} />
            );
        });
        return (
            <div className="pinList">
                {pinNodes}
            </div>
        );
    }
});

var Pin = React.createClass({
    getInitialState: function() {
      return {
        pinned: this.props.pin.pinned
      };
    },
    _onClick: function() {
      if (this.props.pin.pinned)
        PinActions.unpinPost(this.props.pin.id);
      else
        PinActions.pinPost(this.props.pin.id);
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
        var pinClasses = ["pinButton", this.state.pinned ? "pinned" : ""].join(" ");
        pinButton = <button onClick={this._onClick} className={pinClasses}>Pin</button>;
        return (
            <div className="pin">
                <img src={pin.image} alt={pin.title} />
                <h2>{pin.title}</h2>
                {pinButton}
            </div>
        );
  }
});

