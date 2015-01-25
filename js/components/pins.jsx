var PinList = React.createClass({
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

var Modal = React.createClass({
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

var NewPostModal = React.createClass({
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

