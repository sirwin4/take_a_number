var lastName = prompt("What is your last name?")
function lastNameResponder(lastNameVal) {
    if (lastNameVal.length >= 7) {
        console.log("I can't pronounce your name")
    }
    else {
        console.log(lastNameVal)
    }
}

lastNameResponder(lastName);