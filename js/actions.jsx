window.PinActions = {
    pinPost: function(post) {
        console.log(post);
        AppDispatcher.dispatch({
          actionType: Constants.PIN_POST,
          post: post
        });
    }
};
