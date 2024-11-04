const franc = require("franc");
const langs = require('langs');
const colors = require('colors');
const input = process.argv[2];
const convert3To1 = require('iso-639-3-to-1')


// const langCode = (franc('Alle menslike wesens word vry')) //=> 'afr'
const langCode = franc('Alle menneske er fødde til fridom') //=> 'nno'

// const langCode = franc(input)
// const langCode = franc("白日依山尽黄河入海流欲穷千里目更上一层楼")
// const langCode = franc("한국어, 조선어");
// const langCode = franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট');


if (langCode === 'und') {
    console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!"));
} else {
    // const language = langs.where("3", langCode)
    const language = langs.where("1", convert3To1(langCode));
    if (language) {
        console.log(colors.green(`Our best guess is: ${language.name}`));
    } else {
        console.log(colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`));
    }
}


