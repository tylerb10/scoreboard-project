let homeScore = 0
let guestScore = 0

let homeUpdate = document.getElementById("home-score")
let guestUpdate = document.getElementById("guest-score")

function reset() {
    homeScore = 0
    guestScore = 0
    homeUpdate.textContent = homeScore
    guestUpdate.textContent = guestScore
}

function homeOnePoint() {
    homeScore += 1
    homeUpdate.textContent = homeScore
}

function homeTwoPoint() {
    homeScore += 2
    homeUpdate.textContent = homeScore
}

function homeThreePoint() {
    homeScore += 3
    homeUpdate.textContent = homeScore
}

function guestOnePoint() {
    guestScore += 1
    guestUpdate.textContent = guestScore
}

function guestTwoPoint() {
    guestScore += 2
    guestUpdate.textContent = guestScore
}

function guestThreePoint() {
    guestScore += 3
    guestUpdate.textContent = guestScore
}