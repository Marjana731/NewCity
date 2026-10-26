const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll("#menu a");

// Відкриття та закриття меню

menuButton.addEventListener("click", function () {
    menu.classList.toggle("open");

    if (menu.classList.contains("open")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});

// Закриття меню після натискання на посилання

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("open");
        menuButton.textContent = "☰";
    });
});