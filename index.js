
const button1 = document.getElementById("theme-toggle");
button1.addEventListener("click", toogleTheme);
let theme = document.querySelector('html');

function toogleTheme() {
    if (theme.dataset.theme == "dark") {
        theme.dataset.theme = "light";
    } else {
        theme.dataset.theme = "dark";
    }
}

let dark = `<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16"
style="color: currentcolor;">
<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
</svg>`;

let light = `<svg data-testid="geist-icon" fill="none" height="16" shape-rendering="geometricPrecision" stroke="currentColor"
stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16"
style="color: currentcolor;">
<circle cx="12" cy="12" r="5"></circle>
<path d="M12 1v2"></path>
<path d="M12 21v2"></path>
<path d="M4.22 4.22l1.42 1.42"></path>
<path d="M18.36 18.36l1.42 1.42"></path>
<path d="M1 12h2"></path>
<path d="M21 12h2"></path>
<path d="M4.22 19.78l1.42-1.42"></path>
<path d="M18.36 5.64l1.42-1.42"></path>
</svg>`;

if (theme.dataset.theme == "light") {
    button1.innerHTML = dark;
} else {
    button1.innerHTML = light;
}