const SIZE_NAME = "Information Technology";
const BASE_URL = "http://it.tni.ac.th";
const COLOR_THEME = "blue";
const ALLOW_SIGNUP = true;

console.log("Welcome to " + SIZE_NAME);
let languages = ["JavaScript", "Python", "Ruby", "Java", "PHP"];
for (let i in languages) {
    let url = BASE_URL + "lang/" + languages[i].toLowerCase();
    console.log(`- ${languages[i]} programming(${url})`)
}

console.log("Footer");

let foolter = ["About", "Privacy"];
for (let i in foolter) {
    let url = BASE_URL + ' ' + foolter[i].toLowerCase();
    console.log(`- ${foolter[i]} (${url})`);
}

if (ALLOW_SIGNUP) {
    console.log("[Sing up for new settle]");
}

console.log(`© ${new Date().getFullYear()} ${SIZE_NAME}`);