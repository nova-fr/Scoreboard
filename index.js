/*let homeScore = 0;

function increment() {
    homeScore = homeScore + 1;

    document.getElementById("home-score").textContent = homeScore;
}

    old logic of +1 increment
    */

let homeScore = 0;
let guestScore = 0;

function increment(points) {
    homeScore = homeScore + points;

    document.getElementById("home-score").textContent = homeScore;
}

function incrementGuest(points) {
    guestScore = guestScore + points;

    document.getElementById("guest-score").textContent = guestScore;
}

function reset() {
    homeScore = 0;
    guestScore = 0;

    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("guest-score").textContent = guestScore;
}