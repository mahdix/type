let hash = window.location.hash.substring(1);

let hashBits = hash.split("/");
let repo = hashBits.slice(0, 2).join("/");
let file = hashBits[hashBits.length - 1];

$("#congrats").html(`Congratulations, you've completed <code>${file}</code> in <code>${repo}</code>!`);