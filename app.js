let who = ["The dog", "My grandma", "Her cat", "His turtle", "My bird", "My mom"];
let action = ["ate", "peed on", "crushed", "broke","thew away", "scratched"];
let what = ["my homework", "the keys", "the car", "my ass"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying", "before I went to sleep"
];
function exgen(arr) {
  return Math.floor(Math.random() * arr.length)
}
console.log(`${who[exgen(who)]} ${action[exgen(action)]} ${what[exgen(what)]} ${when[exgen(when)]}`)
// var pool = who[Math.floor(Math.random() * who.length)]
// var bar = action[Math.floor(Math.random() * action.length)]
// var cool = what[Math.floor(Math.random() * what.length)]
// var drink = when[Math.floor(Math.random() * when.length)]
