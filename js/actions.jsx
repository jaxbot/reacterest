window.PinActions = {
    pinPost: function(id) {
        AppDispatcher.dispatch({
          actionType: Constants.PIN_POST,
          pinId: id
        });
    },
    unpinPost: function(id) {
        AppDispatcher.dispatch({
          actionType: Constants.UNPIN_POST,
          pinId: id
        });
    },
    showPost: function(id) {
        AppDispatcher.dispatch({
          actionType: Constants.SHOW_POST,
          pinId: id
        });
    },
    newPost: function() {
        AppDispatcher.dispatch({
          actionType: Constants.SHOW_NEW_POST_DIALOG,
        });
    }
};
