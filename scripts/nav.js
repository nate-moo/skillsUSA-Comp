let raw = await fetch("/include/nav.html");
let text = await raw.text();
let parser = new DOMParser();
let doc = parser.parseFromString(text, "text/html");
let nav = doc.querySelector("#navinternal");
document.querySelector("#nav").appendChild(nav);
