var PinList = React.createClass({
    render: function() {
        console.log(this.props);
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
    render: function() {
        return (
            <div className="pin">
                <img src={this.props.data.image} alt={this.props.data.title} />
                <h2>{this.props.data.title}</h2>
            </div>
        );
  }
});

ajax_get("../mockdata/default_pins.json", function(data) {
    React.render(
        <PinList data={data} />,
        document.getElementById('pinList')
    );
});

function ajax_get(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        callback(JSON.parse(xhr.responseText));
    }
    xhr.open("GET", url);
    xhr.send();
}

