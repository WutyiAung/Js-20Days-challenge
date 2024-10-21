let textarea = document.querySelector("textarea");
let count = document.querySelector(".counter");
let countingCharacters = () => {
    let textLength = textarea.value.length;
    count.textContent = `${textLength}`;
}
