function toggleNav() {
    var element = document.getElementById("sb-site");

    if (element.classList) {
        element.classList.toggle("open-nav");
    } else {
        var classes = element.className.split(" ");
        var i = classes.indexOf("open-nav");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("open-nav");
        element.className = classes.join(" ");
    }
}