let buttons = document.querySelectorAll(".btn-counter");
let counterContainer = document.querySelector(".counter");
let countValue = document.querySelector(".counter-machine");
let count = 0;

buttons.forEach( (btn) => {
    btn.addEventListener("click", () => {
        if(btn.classList.contains("decrease-btn")){
            count--;
        }else if(btn.classList.contains("increase-btn")){
            count ++;
        }
        countValue.textContent = count;
        if(count > 0) {
            counterContainer.classList.add('positive');
            counterContainer.classList.remove('negative');
        }else if(count < 0){
            counterContainer.classList.add("negative");
            counterContainer.classList.remove("positive");
        } else {
            counterContainer.classList.remove("negative");
            counterContainer.classList.remove("positive");
        }
    })
})