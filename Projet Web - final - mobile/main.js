function Hamburger() {
    var x = document.getElementById("nav_hamburger");
    if (x.style.top === "0px") {
        x.style.top = "-300px";
    } else {
        x.style.top = "0px";
    }
}