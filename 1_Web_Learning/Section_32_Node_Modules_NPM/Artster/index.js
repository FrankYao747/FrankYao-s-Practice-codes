const figlet = require("figlet");
const colors = require("colors");

figlet("Hello World!!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(colors.rainbow(data));
    console.log(colors.brightGreen(data));
    console.log(colors.brightRed(data));
    console.log(colors.brightBlue(data));
    console.log(colors.bgMagenta(data));
});

