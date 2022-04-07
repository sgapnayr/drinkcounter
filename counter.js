
let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function increment() {
    count += 1;
    countEl.textContent = count;
    console.log(count);
}
function decrement() {
    if (count > 0)
    count -= 1;
    countEl.textContent = count;
    console.log(count);
}
function save() {
    let message1 = "Woah too much!";
    if (count >= 7)
        alert(message1);

    saveEl.textContent = count;
}
function reset() {
    saveEl.textContent = 0;
    countEl.textContent = 0;
    count = 0;
}

// let welcomeEl = document.getElementById('welcome-el')
// let greeting = "Hi my name is ";
// let name = "Ryan"

// welcomeEl.innerText = greeting + name;

// welcomeEl.innerText += " 👋"

// console.log(welcomeEl.innerText)

