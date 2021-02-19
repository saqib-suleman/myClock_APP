const dialLines = document.querySelector('.dialLines');
const clock = document.querySelector('.clock');

for (let i = 1; i < 12; i++) {
    clock.innerHTML = + "<div class="dialLines"></div>";
    dialLines[i].style.tranform = "rotate(" + 30 * i + "deg)";
}