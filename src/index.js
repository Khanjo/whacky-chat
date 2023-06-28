import "./css/styles.css";

//Business Logic

async function getKanye() {
    try {
        const response = await fetch(`https://api.kanye.rest/`);
        const jsonResponse = await response.json();
        if (!response.ok) {
            const error = `${response.status}`;
            throw new Error(error);
        }
        return jsonResponse;
    } catch (error) {
        return error;
    }
}


async function getTrump() {
    try {
        const response = await fetch(`https://api.tronalddump.io/random/quote`);
        const jsonResponse = await response.json();
        if (!response.ok) {
            const error = `${response.status}`;
            throw new Error(error);
        }
        return jsonResponse;
    } catch (error) {
        return error;
    }
}

// UI Logic

async function printKanye() {
    let newKanyeLine = document.createElement("p");
    let kanyeQuote = await getKanye();
    newKanyeLine.innerText = `${kanyeQuote.quote}`;
    document.getElementById("convo").append(newKanyeLine);
}

async function printTrump() {
    let newTrumpLine = document.createElement("p");
    let trumpQuote = await getTrump();
    newTrumpLine.innerText = `${trumpQuote.value}`;
    document.getElementById("convo").append(newTrumpLine);
}

window.addEventListener("load", function () {
    document.getElementById("Kanye").addEventListener("click", printKanye);
    document.getElementById("Trump").addEventListener("click", printTrump);
});