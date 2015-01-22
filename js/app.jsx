HTTP.get("../mockdata/default_pins.json", function(data) {
    React.render(
        <PinList data={data} />,
        document.getElementById('pinList')
    );
});

