let userInputValue = document.getElementById("userInput");
let numFact = document.getElementById("fact");
let spinner = document.getElementById("spinner")

function getNumFact(event) {
    let userValue = userInputValue.value
    if (event.key === "Enter") {
        if (userValue === "") {
            alert("Enter a number")
            return;

        } else {
            let url = "https://apis.ccbp.in/numbers-fact?number=" + userValue
            let options = {
                method: "GET"
            }
            spinner.classList.toggle("d-none")
            fetch(url, options)

                .then(function(response) {
                    return response.json()
                })
                .then(function(jsonData) {
                    numFact.textContent = jsonData.fact
                    spinner.classList.toggle("d-none")
                })
        }
    }
}


userInputValue.addEventListener("keydown", getNumFact)