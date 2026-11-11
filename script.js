function upDate(previewPic) {
    console.log("Mouse or keyboard event");

    let image = previewPic.querySelector("img");

    document.getElementById("image").style.backgroundImage =
        "url('" + image.src + "')";

    document.getElementById("image").textContent =
        image.alt;
}

function undo() {
    document.getElementById("image").style.backgroundImage = "none";

    document.getElementById("image").textContent =
        "Hover over or focus on an image to see it here.";
}

function addTabIndex() {
    console.log("Page loaded");

    let figures = document.querySelectorAll("figure");

    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute("tabindex", "0");
    }
}