var PinList = React.createClass({
    render: function() {
        var pinNodes = this.props.data.map(function (pin) {
            return (
                <Pin data={pin} />
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
    _onClick: function() {
      PinActions.pinPost(this.props.data);
    },
    render: function() {
        return (
            <div className="pin">
                <img src={this.props.data.image} alt={this.props.data.title} />
                <h2>{this.props.data.title}</h2>
                <button onClick={this._onClick}>Pin!</button>
            </div>
        );
  }
});

