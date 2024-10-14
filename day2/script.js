const inputs = document.querySelectorAll(".css-controller input");
inputs.forEach( input => input.addEventListener("change", update ));
function update(){
    document.documentElement.style.setProperty(
        `--${this.name}`, this.value + this.dataset.sizing 
    )
}