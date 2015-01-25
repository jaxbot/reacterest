var HTTP = require("./net");
var PinList = require("./components/pinlist");
var Header = require("./components/Header");
var Store = require("./stores/Store");

HTTP.get("../mockdata/default_pins.json", function(data) {
  Store.setPins(data);
  React.render(
    <PinList data={data} />,
    document.getElementById('pinList')
  );
  React.render(
    <Header />,
    document.getElementById("header")
  );
});

