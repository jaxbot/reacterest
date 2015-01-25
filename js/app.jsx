HTTP.get("../mockdata/default_pins.json", function(data) {
  _pins = data;
  React.render(
    <PinList data={data} />,
    document.getElementById('pinList')
  );
  React.render(
    <Header />,
    document.getElementById("header")
  );
});

