let who = ["The dog", "My grandma", "Her cat", "His turtle", "My bird", "My mom"];
let action = ["ate", "peed on", "crushed", "broke", "thew away", "scratched", "stole"];
let what = ["my homework", "the keys", "the car", "my food"];
let when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying", "before I went to sleep", "yesterday"];
function exgen(arr) {
  return Math.floor(Math.random() * arr.length)
}
let p = `${who[exgen(who)]} ${action[exgen(action)]} ${what[exgen(what)]} ${when[exgen(when)]}`
document.getElementById("CT").innerHTML = p;
