(function () {
var items = [
//START
"Now with 150% more D!",
"WOW",
"COOL",
"SO MUCH 3D",
"DUUUUUUUUUUUUUUDE",
"I CAN SEE THE 3D",
"3D COLORS",
"Also try 4D GAME ENGINES!",
"Also try CHEM35!!",
"Also try CHEM36!!",
"Like us on Facebook!",
"Sweet rigs, man!",
"Web development is fun!",
"Better in Java!",
"II TENKI DESU NE",
//END
"SENTINEL - NEVER REACHED"
];
var str = items[Math.floor(Math.random()*(items.length - 1))];
document.write("<div id=\"exclaim\" style=\"font-size: "+Math.pow(50/str.length, .7)+"em;\">"+str+"</div>");
})();
