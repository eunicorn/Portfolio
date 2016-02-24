
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

