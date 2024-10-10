const franc = require("franc");
const langs = require('langs');
const colors = require('colors');
const input = process.argv[2];

// const langCode = (franc('Alle menslike wesens word vry')) //=> 'afr'
// const langCode = franc('Alle menneske er fødde til fridom') //=> 'nno'

const langCode = franc(input)
// const langCode = franc("你好啊 在干嘛")
// const langCode = franc("한국어, 조선어");

if (langCode === 'und') {
    console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!"));
} else {
    const language = langs.where("3", langCode)
    if (language) {
        console.log(colors.green(`Our best guess is: ${language.name}`));
    } else {
        console.log(colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`));
    }
}


