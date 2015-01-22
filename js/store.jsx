var _pins = [];

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

    default:
      // no op
  }
});

