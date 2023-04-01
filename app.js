
const button1 = document.getElementById("theme-toggle");
button1.addEventListener("click", toogleTheme);
function toogleTheme() {
    let theme = document.querySelector('html');
    if (theme.dataset.theme == "dark") {
        theme.dataset.theme = "light";
    } else {
        theme.dataset.theme = "dark";
    }
}



