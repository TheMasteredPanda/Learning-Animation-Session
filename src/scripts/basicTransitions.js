$(function() {
    $('#toggle-button').click(function () {
        console.log('Clicked toggle button.');
        let box = $("#toggle-transition");

        if (box.hasClass("gold-toggle")) {
            box.removeClass("gold-toggle").addClass("black-toggle");
        console.log('Removed gold toggle class.');
        } else {
            box.removeClass("black-toggle").addClass("gold-toggle");
            console.log('Added gold toggle class.');
        }
    });

    $('#transition-navbar-button').click(function () {
        console.log('Clicked');

        let navbar = $('.sticky-navbar');

        if (!navbar.hasClass('minimise')) {
            navbar.addClass('minimise');
        } else {
            navbar.removeClass('minimise');
        }
    });
});

function dropdown(id) {
    let content = $(`#${id}`);
    if (content.css('visibility') === 'visible') return;
    content.css('height', 'auto');
    let height = content.height();
    console.log(height);
    content.css('height', '0');
    content.css('visibility', 'visible');
    content.css('height', height);
}

function foldDropdown(id) {
    let content = $(`#${id}`);
    content.css('height', '0');

    setTimeout(function () {
        content.css('visibility', 'hidden');
    }, 800);
}