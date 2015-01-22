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
        if (!this.state.pinned) {
          pinButton = <button onClick={this._onClick}>Pin!</button>;
        }
        return (
            <div className="pin">
                <img src={pin.image} alt={pin.title} />
                <h2>{pin.title}</h2>
                {pinButton}
            </div>
        );
  }
});

