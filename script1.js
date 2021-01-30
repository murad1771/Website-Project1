let range = document.getElementById("range");
let output = document.getElementById("op");
output.innerHTML = range.value;
range.oninput = function () {
    output.innerHTML = this.value;
}