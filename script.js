const toggleBtn = document.querySelector("#toggleBtn");
const mode = document.querySelectorAll(".mode");

var count = 0;

toggleBtn.addEventListener('click', () => {
    switch (count) {
        case 0:
            mode.forEach((element) => {

                element.classList.add("dark");
            })
            break;
        case 1:
            mode.forEach((element) => {
                element.classList.remove("dark");
                element.classList.add("navy");
            })
            break;
        case 2:
            mode.forEach((element) => {
                element.classList.remove("navy");
            })
            break;
    }
    count++;
    if (count > 2) {
        count = 0;
    }
})