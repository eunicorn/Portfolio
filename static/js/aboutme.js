
$("#aa").click(show);
$("#bb").click(show);

function show(e) {
    // prevent the page from reloading
    e.preventDefault();
    var x = this.id;
    console.log(x);
    x = x.charAt(0)
    var newX = "."+ x;
    $(newX).toggle();
};

/*
$("#nav-me").click(active);
$("#nav-projects").click(active);
$("#nav-contactme").click(active);

function active(e) {
    e.preventDefault();
    $(this.id).style.color = "blue";
    return false;
}
*/