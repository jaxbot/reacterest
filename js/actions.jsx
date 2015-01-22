window.PinActions = {
    pinPost: function(id) {
        AppDispatcher.dispatch({
          actionType: Constants.PIN_POST,
          pinId: id
        });
    }
};
