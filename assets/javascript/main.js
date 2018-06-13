$(document).ready(function () {
    $(".signup").attr({
        onfocus: "empty(this);",
        onblur: "fill(this);"
    });
});

function empty(textbox) {
    if (textbox.value === textbox.name) {
        textbox.value = "";
        if (textbox.name === "Password") {
            textbox.type = "password";
        }
    }
}

function fill(textbox) {
    if (!textbox.value) {
        textbox.value = textbox.name;
        if (textbox.name === "Password") {
            textbox.type = "text";
        }
    }
}

function centralize(element) {
    var content = $(element);
    var top = (window.innerHeight - content.height()) / 2;
    var left = (window.innerWidth - content.width()) / 2;

    content.css('top', Math.max(0, top) + 'px');
    content.css('left', Math.max(0, left) + 'px');
}

$(document).ready(function () {
    // for some reason injection of the function into window is necessary, it won't run under <script>
    window.goTo = function (objectID) {
        document.querySelector(objectID).scrollIntoView({ behavior: 'smooth' });
    };
});

$(window).on('load', function () {
    centralize("#centralMessage");
});