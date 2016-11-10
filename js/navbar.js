/* Toggle menu, when on small screens */
function toggleNavbarExpanded() {
    var topnav = document.getElementById("topnav");
    if (topnav.className === "") {
        topnav.className = "expanded";
    } else {
        topnav.className = "";
    }
}