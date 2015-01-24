var _pins = [];
var currentPin = null;
var showModals = {
  newPost: false
};

window.Store = (function() {
  var changeCallbacks = [];

  return {
    emitChange: function() {
      for (var i = 0; i < changeCallbacks.length; i++) {
        changeCallbacks[i]();
      }
    },
    addChangeListener: function(callback) {
      changeCallbacks.push(callback);
    },
    removeChangeListener: function(callback) {
      changeCallbacks.splice(changeCallbacks.indexOf(callback), 1);
    },
    getPinState: function(id) {
      console.log(id);
      console.log(_pins);
      for (var i = 0; i < _pins.length; i++) {
        if (_pins[i].id == id) return _pins[i];
      }
      return null;
    },
    getAllPins: function() {
      return _pins;
    },
    getPinListState: function() {
      return { currentPin: currentPin, show: showModals };
    },
    newPost: function(post) {
      post.id = Math.random();
      _pins.push(post);
    }
  };
})();


// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;
  var pin = Store.getPinState(action.pinId);

  switch(action.actionType) {
    case Constants.PIN_POST:
      pin.pinned = true;
      Store.emitChange();
      break;
    case Constants.UNPIN_POST:
      pin.pinned = false;
      Store.emitChange();
      break;
    case Constants.SHOW_POST:
      currentPin = Store.getPinState(action.pinId);
      Store.emitChange();
      break;
    case Constants.SHOW_NEW_POST_DIALOG:
      showModals.newPost = true;
      Store.emitChange();
      break;
    case Constants.HIDE_MODAL:
      showModals = {};
      Store.emitChange();
      break;
    case Constants.NEW_POST:
      Store.newPost(action.post);
      Store.emitChange();
      break;
    default:
      // no op
  }
});

