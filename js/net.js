window.HTTP = {
  get: function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      callback(JSON.parse(xhr.responseText));
    };
    xhr.open("GET", url);
    xhr.send();
  }
};

