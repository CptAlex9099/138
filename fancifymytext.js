                                                                            // Bigger Button
function biggerBetter() {
    // Put the following line of code into the file
    alert("Hello, world");

    let textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
}

                                                                            // FancyShmancy and Boringbetty Radio Buttons
function fancifyText() {
    let textArea = document.getElementById("textArea");
    let fancyYou = document.getElementById("fancyShmancy");

    // see if a radio button is set by checking its checked
    if(fancyYou.checked) {
        // Add an onchange on the radio button that calls a function that pops up an alert.
        alert("FancyShmancy!");

        // set the text area's font weight to bold
        textArea.style.fontWeight = "bold";
        // selecting the "FancyShmancy" radio button, should make the text bold, underline, and blue.
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        // When the radio button is switched to the "BoringBetty", the font weight should go back to normal.
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

                                                                            // Moo Button
function mooText() {
    let textArea = document.getElementById("textArea");

    // when clicked, uppercases the text in the text area
    let text = textArea.value.toUpperCase();

    // sentence to be a string of text that ends with a period character, "."
    let sentences = text.split(".");

    // adds a suffix of "-Moo" to the last word of each sentence
    for(let i =0; i < sentences.length; i++) {
        let sentence = sentences[i].trimEnd();

        if(sentence.length > 0) {
            // Use the String/array methods split and join
            let words = sentence.split(" ");
            words[words.length - 1] += "-MOO";
            sentences[i] = words.join(" ");
        }
    }

    text = sentences.join(".");
    // Use the value property of the text area.
    textArea.value = text;
}