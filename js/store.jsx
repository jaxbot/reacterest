// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case Constants.PIN_POST:
      Store.emitChange();
      break;

    default:
      // no op
  }
});

