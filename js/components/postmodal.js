var PostModal = React.createClass({
  _hide: function() {
    PinActions.hideModal();
  },
  render: function() {
    var pin = this.props.pin;
    return (
      <Modal hide={this._hide}>
        <div className="post_view">
          <img src={pin.image} alt={pin.title} />
          <h2>{pin.title}</h2>
          {pin.description}
        </div>
      </Modal>
    );
  }
});


